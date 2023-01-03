import { call, fork, put, take } from 'redux-saga/effects';
import { authAction } from './authSilce';
import * as useProvider from '~/Services/Api/userServices';
function* handleLogin(payload) {
    const user = yield useProvider
        .postLogin({ email: payload.email, password: payload.password })
        .then((res) => {
            localStorage.setItem('success_token', res.meta.token);
            return res.data;
        })
        .catch((err) => console.log(err));
    yield put(authAction.loginSuccess(user));
}
function* handleLogout() {
    yield localStorage.removeItem('success_token');
}
function* watchLoginFlow() {
    // khi nó đăng nhập thành công thì nó mới được đăng xuất khi gội tới action logout
    while (true) {
        let isLogin = Boolean(localStorage.getItem('success_token'));
        if (!isLogin) {
            const action = yield take(authAction.login.type);
            yield fork(handleLogin, action.payload);
        }
        yield take(authAction.logout.type);
        yield call(handleLogout);
    }
}
export function* authSage() {
    yield fork(watchLoginFlow);
}

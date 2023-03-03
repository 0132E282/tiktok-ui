import { call, fork, put, take } from 'redux-saga/effects';
import { authAction } from './authSilce';
import * as useProvider from '~/Services/Api/userServices';
import * as authProvider from '~/Services/Api/auth';
function* handleLogin(payload) {
    console.log(1);
    const user = yield useProvider
        .postLogin({ email: payload.email, password: payload.password })
        .then((res) => {
            localStorage.setItem('success_token', res.meta.token);
            return res.data;
        })
        .catch((err) => console.log(err));
    if (user) yield put(authAction.loginSuccess(user));
}
function* uploadAccount() {
    const token = localStorage.getItem('success_token');
    const action = yield take(authAction.upload.type);
    const payload = action.payload;
    const user = yield authProvider
        .updateAccount(token, {
            nickname: payload.nickname,
            last_name: payload.last_name,
            first_name: payload.first_name,
            avatar: payload.avatar,
            bio: payload.bio,
        })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => console.log(err));
    if (user) yield put(authAction.uploadSuccess(user));
}
function* handleLogout() {
    yield localStorage.removeItem('success_token');
}
function* watchLoginFlow() {
    let isLogin = Boolean(localStorage.getItem('success_token'));
    // khi nó đăng nhập thành công thì nó mới được đăng xuất khi gội tới action logout
    while (true) {
        if (!isLogin) {
            console.log(1);
            const action = yield take(authAction.login.type);
            yield fork(handleLogin, action.payload);
        } else {
            yield take(authAction.logout.type);
            yield fork(handleLogout);
        }
    }
}

export function* authSage() {
    yield call(watchLoginFlow);
    yield call(uploadAccount);
}

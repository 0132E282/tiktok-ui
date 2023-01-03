import { all } from 'redux-saga/effects';
import { authSage } from '~/auth/authSaga';
function* RootSagaMiddleware() {
    yield all([authSage()]);
}
export default RootSagaMiddleware;

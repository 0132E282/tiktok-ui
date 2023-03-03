import { all } from 'redux-saga/effects';

import { authSage } from '~/reduxSage/authSage/authSaga';
import { userSaga } from '~/reduxSage/userSage/userSaga';
function* RootSagaMiddleware() {
    yield all([authSage(), userSaga()]);
}
export default RootSagaMiddleware;

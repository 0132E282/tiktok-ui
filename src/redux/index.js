import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import RootSagaMiddleware from './rootSagaMiddleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '~/reduxSage/authSage/authSilce';
import userReducer from '~/reduxSage/userSage/userSilce';
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
});
sagaMiddleware.run(RootSagaMiddleware);
export let persistor = persistStore(store);
export default store;

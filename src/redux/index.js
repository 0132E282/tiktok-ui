import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RootSagaMiddleware from './rootSagaMiddleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '~/auth/authSilce';
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(RootSagaMiddleware);
export let persistor = persistStore(store);
export default store;

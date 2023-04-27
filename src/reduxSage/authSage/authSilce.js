import { createSlice } from '@reduxjs/toolkit';
export const initialStateAuth = {
    isLogin: false,
    logging: false,
    currentUser: undefined,
    isUpdated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {
        login(state, action) {
            state.logging = true;
        },
        loginSuccess(state, action) {
            state.logging = false;
            state.isLogin = true;
            state.currentUser = action.payload;
            window.location.reload();
        },
        loginFailed(state, action) {
            state.logging = false;
        },
        logout(state) {
            state.isLogin = false;
            state.currentUser = undefined;
            window.location.reload();
        },
        upload(state, action) {
            state.isUpdated = false;
        },
        uploadSuccess(state, action) {
            state.isUpdated = true;
            state.currentUser = action.payload;
            window.location.reload();
        },
    },
});
export const selectIsLogin = (state) => state.auth.isLogin;
export const selectLogging = (state) => state.auth.logging;
export const authAction = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;

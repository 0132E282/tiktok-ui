import { createSlice } from '@reduxjs/toolkit';

export const initialStateUser = {
    followed: false,
    likeVideo: false,
    id: undefined,
    value: {},
    videoValue: {},
};
const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        followingAndUnFollow(state, action) {
            state.value = action.payload;
            state.followed = action.payload.is_followed;
            state.id = action.payload.id;
        },
        successFollow(state, action) {
            state.value = { ...action.payload };
        },
        likeAndUnLikeVideo(state, action) {
            state.videoValue = action.payload;
            state.likeVideo = action.payload.is_liked;
        },
        successLikeVideo(state, action) {
            state.videoValue = action.payload;
            state.likeVideo = action.payload.is_liked;
        },
    },
});
export const isFollowed = (state) => state.user.isFollowed;
export const followed = (state) => state.user.followed;
export const userAction = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;

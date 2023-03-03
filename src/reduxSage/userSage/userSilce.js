import { createSlice } from '@reduxjs/toolkit';

export const initialStateUser = {
    followed: false,
    likeVideo: false,
    id: undefined,
};
const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        followingAndUnFollow(state, action) {
            state.followed = action.payload.is_followed;
            state.id = action.payload.id;
        },
        successFollow(state, action) {
            state.isFollowed = action.payload.is_followed;
        },
        likeAndUnLikeVideo(state, action) {
            state.likeVideo = action.payload.is_liked;
        },
        successLikeVideo(state, action) {
            state.likeVideo = action.payload.is_liked;
        },
    },
});
export const isFollowed = (state) => state.user.isFollowed;
export const followed = (state) => state.user.followed;
export const userAction = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;

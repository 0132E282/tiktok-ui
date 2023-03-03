import { call, fork, put, take } from 'redux-saga/effects';
import { userAction } from './userSilce';
import * as followService from '~/Services/Api/follow';
import * as likeService from '~/Services/Api/like';

let token = localStorage.getItem('success_token');

function* handleFollowAndUnFollow(payload) {
    const type = payload.is_followed ? 'unfollow ' : 'follow';
    const userFollowed = yield followService
        .follow({ type, id: payload.id, token })
        .then((res) => res)
        .catch((err) => console.log(err));
    if (userFollowed) yield put(userAction.successFollow(userFollowed));
}
function* handleLikeAndUnLikeVideo(payload) {
    const type = payload.is_liked ? 'unlike ' : 'like';
    const videoLike = yield likeService
        .postLikeAndUnLike(token, { name: 'videos', id: payload.id, type })
        .then((res) => res)
        .catch((err) => console.log(err));
    if (videoLike) yield put(userAction.successLikeVideo(videoLike));
}
function* watchFollowed() {
    while (true) {
        const action = yield take(userAction.followingAndUnFollow.type);
        yield fork(handleFollowAndUnFollow, action.payload);
    }
}
function* likeAndUnLike() {
    while (true) {
        const action = yield take(userAction.likeAndUnLikeVideo.type);
        yield fork(handleLikeAndUnLikeVideo, action.payload);
    }
}
export function* userSaga() {
    yield fork(likeAndUnLike);
    yield fork(watchFollowed);
}

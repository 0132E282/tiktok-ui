import classNames from 'classnames/bind';
import Video from '~/components/video/Video';
import Comment from './components/comment';
import HeaderContentVideo from './components/HeaderConentVideo';
import style from './VideoDetail.module.scss';
import * as VideoServices from '~/Services/Api/videoServices';
import { useEffect, useRef, useState ,useContext,useReducer} from 'react';
import {  Navigate, useParams } from 'react-router-dom';
import * as commentsServices from '~/Services/Api/comments';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import ItemComment from './components/comment/ItemComment';
import { useSelector } from 'react-redux';
import Modal from '~/components/modal/Modal';
import Button from '~/components/Button';
import * as likeServices from '~/Services/Api/like';
const cx = classNames.bind(style);
const initialComment = {};
const actionTypeComment = {
    CREATE_COMMENT: 'CREATE_COMMENT',
    DELETE_COMMENT: 'DELETE_COMMENT',
    LIKE_AND_AU_LIKE: 'LIKE_AND_AU_LIKE',
};
const initialStateVideo = [];
const actionTypeVideo = {
    DELETE_VIDEO: 'DELETE_VIDEO',
    UPDATE_RIGHTS: 'UPDATE_RIGHTS',
};
function VideoDetail() {
    const [currentVideo, setCurrentVideo] = useState({});
    const { id } = useParams();
    const commentTextRef = useRef();
    const { token } = useContext(ProviderServices);
    const [commentList, setCommentList] = useState([]);
    const [isModelDelete, setIsModelDelete] = useState(false);
    const [idComment, setIdComment] = useState();
    const user = useSelector((state) => state.user);
    const [nameDelete, setNameDelete] = useState('video');
    const reducerComment = (state, action = {}) => {
        switch (action.type) {
            case 'DELETE_COMMENT':
                console.log(action.id_comment);
                const commentList = async () => {
                    const res = await commentsServices.deleteComment({ id_comment: action.id_comment, token });
                    dispatchComment({ type: 'SUCCESS', payload: res });
                    res && setIsModelDelete(false);
                };
                commentList();
                break;
            case 'CREATE_COMMENT':
                const comment = async () => {
                    const res = await commentsServices.createComment({
                        id_video: id,
                        token,
                        text_comment: action.formData.text_comment,
                    });
                    commentTextRef.current.querySelector('textarea[name="text_comment"]').focus();
                    commentTextRef.current.querySelector('textarea[name="text_comment"]').value = '';
                    dispatchComment({ type: 'SUCCESS', payload: res });
                };
                comment();
                break;
            case 'LIKE_AND_AU_LIKE':
                const type = action.payload.is_liked ? 'unlike' : 'like';
                likeServices
                    .postLikeAndUnLike(token, { name: 'comments', id: action.payload.id, type })
                    .then((res) => {
                        dispatchComment({ type: 'SUCCESS', payload: res });
                    })
                    .catch((err) => console.log(err));
                break;
            case 'SUCCESS':
                return action.payload;
            default:
                console.log(1);
        }
    };
    const [commentRedux, dispatchComment] = useReducer(reducerComment, initialComment);
    useEffect(() => {
        VideoServices.getAVideo({ id, currentToKen: token })
            .then((res) => {
                setCurrentVideo({ ...res });
            })
            .catch((err) => console.log(err));
        commentsServices
            .getCommentList({ id_video: id, token })
            .then((res) => {
                setCommentList([...res]);
            })
            .catch((err) => []);
    }, [id, token, user.followed, user.likeVideo, commentRedux]);
    const ACTION_VIDEO = [
        {
            title: 'xoa',
            handleLickAction: () => {
                setIsModelDelete(true);
                setNameDelete('video');
            },
        },
        {
            title: 'cài đặt quyền riêng tư',
            handleLickAction() {
                dispatchActionVideo({
                    type: actionTypeVideo.DELETE_VIDEO,
                    payload: currentVideo,
                });
            },
        },
    ];
    const reduxVideos = (state, action) => {
        switch (action.type) {
            case 'DELETE_VIDEO':
                const res = VideoServices.deleteVideo(token, { id: action.payload.id })
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => console.log(err));
                res && Navigate({ to: `/@${action.payload.nickname}` });
                break;
            case 'SUCCESS':
                return action.payload;
            default:
                console.log(1);
        }
    };
    const [actionVideo, dispatchActionVideo] = useReducer(reduxVideos, initialStateVideo);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('video-detail')}>
                    <div
                        className={cx('background-video')}
                        style={{
                            backgroundImage: 'url(' + (currentVideo ? currentVideo.thumb_url : '') + ')',
                        }}
                    ></div>
                    <Video className={cx('video-wrapper')} video_rul={currentVideo.file_url} autoPalyVideo={true} />
                </div>
                <div className={cx('content')}>
                    <HeaderContentVideo
                        dataUser={currentVideo.user || ''}
                        dataVideo={currentVideo}
                        descriptionVideo={currentVideo.description}
                        music={currentVideo.music}
                        countLike={currentVideo.likes_count}
                        countComment={currentVideo.comments_count}
                        isLiked={currentVideo.is_liked}
                        menuActionVideo={ACTION_VIDEO}
                    />
                    <div className={cx('comment')}>
                        <Comment
                            ref={commentTextRef}
                            onSubmit={(data) => {
                                dispatchComment({
                                    type: actionTypeComment.CREATE_COMMENT,
                                    formData: data,
                                });
                            }}
                        >
                            {commentList.length > 0 ? (
                                commentList.map((comment, index) => (
                                    <ItemComment
                                        key={comment.id}
                                        data={comment}
                                        clickDelete={(e) => {
                                            setIsModelDelete(true);
                                            setNameDelete('binh luan');
                                            setIdComment(comment.id);
                                        }}
                                        handleOnLickLike={() => {
                                            dispatchComment({
                                                type: actionTypeComment.LIKE_AND_AU_LIKE,
                                                payload: comment,
                                            });
                                        }}
                                    />
                                ))
                            ) : (
                                <div className={cx('empty')}>Hãy là người đầu tiên bình luận!</div>
                            )}
                        </Comment>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModelDelete}>
                <div className={cx('notification-delete')}>
                    <h1 className={cx('title')}>Bạn có chắc chắn muốn xóa {nameDelete} này?</h1>
                    <div className={cx('wrapper-action')}>
                        <Button
                            className={cx('btn-action_delete')}
                            medium
                            onClick={() => {
                                if (idComment) {
                                    dispatchComment({
                                        type: actionTypeComment.DELETE_COMMENT,
                                        id_comment: idComment,
                                    });
                                } else {
                                    dispatchActionVideo({
                                        type: actionTypeVideo.DELETE_VIDEO,
                                        payload: currentVideo,
                                    });
                                }
                            }}
                        >
                            xóa
                        </Button>
                        <Button
                            className={cx('btn-action_delete')}
                            medium
                            onClick={() => {
                                setIsModelDelete(false);
                            }}
                        >
                            hủy
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default VideoDetail;

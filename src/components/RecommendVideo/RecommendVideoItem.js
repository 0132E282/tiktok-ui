import classnames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    IconCheckBlue,
    IconComment,
    IconSend,
    IconFacebook,
    IconLike,
    IconTwitter,
    IconLink,
    IconShare,
    IconInstagram,
    IconMusic,
    IconMusicNote,
} from '~/icon';
import style from './RecommendVideo.module.scss';
import Image from '~/Images';
import Button from '../Button';

import Menu from '../Popper/Menu';
import Video from '../video/Video';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import { userAction } from '~/reduxSage/userSage/userSilce';
import { forwardRef } from 'react';
const LIST_METHOD_SHARE = [
    {
        icon: <IconLink />,
        title: 'nhúng',
    },
    {
        icon: <IconSend />,
        title: 'gữi cho bạn bè',
    },
    {
        icon: <IconFacebook width={'2.6rem'} height={'2.6rem'} />,
        title: 'Chia sẻ với Facebook',
    },
    {
        icon: <IconTwitter width={'2.6rem'} height={'2.6rem'} />,
        title: 'Chia sẻ với Twitter',
    },
    {
        icon: <IconInstagram width={'2.6rem'} height={'2.6rem'} />,
        title: 'Chia sẻ với Instagram',
    },
];

const cx = classnames.bind(style);
function RecommendVideoItem({ user, video, onCanPlayVideo }, ref) {
    const { currentUser, setIsModalLogin } = useContext(ProviderServices);
    const { isLogin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const currentUrl = useLocation();
    return (
        <div className={cx('wrapper')} ref={ref}>
            <Image className={cx('avatar avatar-m')} src={user.avatar} />
            <div className={cx('container')}>
                <div className={cx('info-user')}>
                    <div className={cx('info-user__author')}>
                        <Link to={'/@' + user.nickname + ''} className={cx('info-user__author-link')}>
                            <h3 className={cx('author-link__nickname')}>{user.nickname}</h3>
                            {user.tick && <IconCheckBlue className={cx('author-link__check-blue')} />}
                            <span className={cx('author-link__fullName')}>
                                {user.first_name + ' ' + user.last_name}
                            </span>
                        </Link>
                    </div>
                    <p className={cx('info-user__description')}>{video.description}</p>
                    <a href="/#" className={cx('video-music')}>
                        <span className={cx('icon')}>
                            <IconMusicNote />
                        </span>
                        {video.music}
                    </a>
                </div>
                <div className={cx('body')}>
                    <div className={cx('video')}>
                        <Link
                            className={cx('link')}
                            to={'/@' + user.nickname + '/' + video.id + ''}
                            onClick={(e) => {
                                if (e.target.closest('button') || e.target.closest('input')) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <Video video_rul={video.file_url} onCanPlay={onCanPlayVideo} />
                        </Link>
                    </div>
                    <div className={cx('video-wrapper__action')}>
                        <div className={cx('video-wrapper__action-list')}>
                            <div className={cx('action-list_item')}>
                                <div className={cx('action-list_item--icon')}>
                                    <Button
                                        icon={<IconLike className={cx({ like: video.is_liked })} />}
                                        onClick={() => {
                                            !isLogin
                                                ? setIsModalLogin(true)
                                                : dispatch(userAction.likeAndUnLikeVideo(video));
                                        }}
                                    />
                                </div>
                                <p className={cx('action-list_item--text')}>{video.likes_count}</p>
                            </div>
                            <div className={cx('action-list_item')}>
                                <div className={cx('action-list_item--icon')}>
                                    <Link
                                        to={`/@${user.nickname}/${video.id}`}
                                        onClick={(e) => {
                                            if (!isLogin) {
                                                e.preventDefault();
                                                setIsModalLogin(true);
                                            } else {
                                            }
                                        }}
                                    >
                                        <IconComment className={cx('link')} />
                                    </Link>
                                </div>
                                <p className={cx('action-list_item--text')}>{video.comments_count}</p>
                            </div>
                            <div className={cx('action-list_item')}>
                                <Menu
                                    className={cx('menu_method-share')}
                                    placement={'top-start'}
                                    menuItem={LIST_METHOD_SHARE}
                                    hideOnClick={true}
                                >
                                    <div className={cx('action-list_item--icon')}>
                                        <IconShare />
                                    </div>
                                </Menu>
                                <p className={cx('action-list_item--text')}>{video.shares_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {currentUrl.pathname !== '/following' && currentUser?.id !== user.id && (
                <>
                    <Button
                        small
                        btnPrimary={!user.is_followed}
                        content={user.is_followed ? 'đang follow' : 'follow'}
                        onClick={(e) => {
                            dispatch(userAction.followingAndUnFollow(user));
                        }}
                    />
                </>
            )}
        </div>
    );
}

export default forwardRef(RecommendVideoItem);

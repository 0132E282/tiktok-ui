import classnames from 'classnames/bind';
import { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
} from '~/icon';
import style from './RecommendVideo.module.scss';
import routes from '~/config/routes';
import Image from '~/Images';
import Button from '../Button';
import Modal from '../modal';
import MethodLoginModal from '../modal/ListMenuItem/methodLogin/MethodLogin';
import Menu from '../Popper/Menu';
import Video from '../video/Video';
import { useDebounce } from '~/hooks';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
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
function RecommendVideoItem({ user, video, btnFollowing, handleCanPlayVideo }) {
    const { scrollValue } = useContext(ProviderServices);
    const [isLike, setIsLike] = useState(video.is_liked);
    const [isModal, setIsModal] = useState(false);
    const { isLogin } = useSelector((state) => state.auth);
    const scrollDebounce = useDebounce(scrollValue, 100);
    const { setHistoryPlaying } = useContext(ProviderServices);
    const VideoItemRef = useRef();
    //! cần sửa đoạn nầy
    useEffect(() => {
        let activeVideo;
        if (
            scrollDebounce - VideoItemRef.current.offsetTop < 300 &&
            scrollDebounce - VideoItemRef.current.offsetTop > -150
        ) {
            activeVideo = VideoItemRef.current.querySelector('video');
            activeVideo.play();
            setHistoryPlaying(activeVideo);
        }
        return () => {
            activeVideo && activeVideo.pause();
        };
    }, [scrollDebounce, setHistoryPlaying]);
    return (
        <div className={cx('wrapper')} ref={VideoItemRef}>
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
                        {video.music}
                    </a>
                </div>
                <div className={cx('body')}>
                    <div className={cx('video')}>
                        <Video video_rul={video.file_url} onCanPlay={handleCanPlayVideo} />
                    </div>
                    <div className={cx('video-wrapper__action')}>
                        <div className={cx('video-wrapper__action-list')}>
                            <div className={cx('action-list_item')}>
                                <div className={cx('action-list_item--icon')}>
                                    <Button
                                        icon={<IconLike className={cx({ like: isLike })} />}
                                        onClick={(e) => {
                                            isLike ? setIsLike(false) : setIsLike(true);
                                        }}
                                    />
                                </div>
                                <p className={cx('action-list_item--text')}>{video.likes_count}</p>
                            </div>
                            <div className={cx('action-list_item')}>
                                <div className={cx('action-list_item--icon')}>
                                    <Link to={'/'}>
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
            {btnFollowing && (
                <>
                    <Button
                        small
                        btnPrimary={!user.is_followed}
                        content={user.is_followed ? 'đang follow' : 'follow'}
                        onClick={(e) => {
                            if (!isLogin) {
                                setIsModal(true);
                            }
                        }}
                    />

                    <Modal isOpen={isModal}>
                        <MethodLoginModal
                            onClick={() => {
                                setIsModal(false);
                            }}
                        />
                    </Modal>
                </>
            )}
        </div>
    );
}

export default RecommendVideoItem;

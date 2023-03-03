import classnames from 'classnames/bind';
import { useEffect, useRef, useState, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Modal from '~/components/modal/Modal';
import UpdateProFileMe from './components/UpdateProFileMe';
import {
    IconCaretRight,
    IconCheckBlue,
    IconEdit,
    IconFacebook,
    IconFlag,
    IconInstagram,
    IconKey,
    IconLink,
    IconListMenu,
    IconMessage,
    IconSend,
    IconShareFar,
    IconSpan,
    IconTwitter,
    IconUser,
} from '~/icon';
import Image from '~/Images';
import styles from './Profile.module.scss';
import * as userServices from '~/Services/Api/userServices';

import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import { userAction } from '~/reduxSage/userSage/userSilce';
import { useDebounce } from '~/hooks';
const cx = classnames.bind(styles);
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
const LIST_ACTION = [
    {
        icon: <IconMessage width={'1.6rem'} height={'1.6rem'} />,
        title: 'ngữi tinh nhăn',
    },
    {
        icon: <IconFlag />,
        title: 'báo cáo',
    },
    {
        icon: <IconSpan />,
        title: 'chặn',
    },
];
function Profile() {
    const lineRef = useRef();
    const { nickname } = useParams();
    const [action, setAction] = useState('video');
    const [indexVideo, setIndexVideo] = useState(0);
    const indexVideoDebounce = useDebounce(indexVideo, 300);
    const [user, setUser] = useState({});
    const currentUser = useSelector((state) => state.auth.currentUser);
    const userRedux = useSelector((state) => state.user);
    const videoListRef = useRef([]);
    const [isModal, setIsModal] = useState(false);
    const token = useContext(ProviderServices);
    const [actionUserName, setActionUserName] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        userServices
            .getAnUser({ nickname, currentToKen: token.token })
            .then((res) => {
                if (res && currentUser && res.id === currentUser.id) {
                    setActionUserName('sửa hồ sở');
                } else {
                    res.is_followed ? setActionUserName('nhắn tin') : setActionUserName('follow');
                }
                setUser(res);
            })
            .catch((err) => console.log(err));
    }, [currentUser, userRedux.followed, nickname, token]);
    useEffect(() => {
        const videoPlay = videoListRef.current[indexVideoDebounce];
        videoPlay && videoPlay.play();
        return () => {
            if (videoPlay && videoPlay.playing) {
                videoPlay.pause();
            }
        };
    }, [indexVideoDebounce]);
    function lineAction(element, lineElement) {
        lineElement.style.width = element.offsetWidth + 'px';
        lineElement.style.left = element.offsetLeft + 'px';
    }
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('user')}>
                        <Image className={cx('avatar')} src={user.avatar} />
                        <div className={cx('user-container')}>
                            <h1 className={cx('nickname')}>
                                {user.nickname}{' '}
                                <span> {user.tick && <IconCheckBlue width="2rem" height="2rem" />}</span>
                            </h1>
                            <h2 className={cx('name')}>{user.first_name + ' ' + user.last_name}</h2>
                            <Button
                                primary
                                iconLeft={currentUser && currentUser.id === user.id && <IconEdit />}
                                className={cx(
                                    'btn-follow',
                                    {
                                        'btn-proFille': currentUser && currentUser.id === user.id,
                                    },
                                    { 'btn-followed': user.is_followed },
                                )}
                                content={actionUserName}
                                onClick={() => {
                                    if (currentUser && currentUser.id === user.id) {
                                        setIsModal(true);
                                    } else {
                                        dispatch(userAction.followingAndUnFollow(user));
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className={cx('count-infos')}>
                        <div className={cx('count-infos__item')}>
                            <span>{user.followings_count}</span> Đang Follow
                        </div>
                        <div className={cx('count-infos__item')}>
                            <span>{user.followers_count}</span> Follower
                        </div>
                        <div className={cx('count-infos__item')}>
                            <span>{user.likes_count}</span> Thích
                        </div>
                    </div>
                    <div className={cx('description')}>{user.bio}</div>
                    <div className={cx('action')}>
                        <Menu
                            className={cx('menu-share')}
                            placement={'bottom-end'}
                            menuItem={LIST_METHOD_SHARE}
                            hideOnClick={true}
                        >
                            <div className={cx('icon')}>
                                <IconShareFar />
                            </div>
                        </Menu>
                        <Menu
                            className={cx('menu-share')}
                            placement={'bottom-end'}
                            menuItem={LIST_ACTION}
                            hideOnClick={true}
                        >
                            <div className={cx('icon')}>
                                <IconListMenu className={cx('icon_list-menu')} />
                            </div>
                        </Menu>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('video-feed-tap')}>
                        <p
                            className={cx('tap-item', { active: action === 'video' })}
                            onClick={(e) => {
                                setAction('video');
                                lineAction(e.currentTarget, lineRef.current);
                            }}
                        >
                            video
                        </p>
                        <p
                            className={cx('tap-item', { active: action === 'liked' })}
                            onClick={(e) => {
                                setAction('liked');
                                lineAction(e.currentTarget, lineRef.current);
                            }}
                        >
                            <span className={cx('icon')}>
                                <IconKey />
                            </span>
                            đã thích
                        </p>
                        <div className={cx('video-feed-line')} ref={lineRef}></div>
                    </div>
                </div>
                <div className={cx('video-wrapper')}>
                    {user.videos && user.videos.length > 0 ? (
                        <div className={cx('video-feed')}>
                            {user.videos &&
                                user.videos.map((video, index) => {
                                    return (
                                        <div
                                            key={video.id}
                                            className={cx('item')}
                                            onMouseMove={() => {
                                                setIndexVideo(index);
                                            }}
                                        >
                                            <Link to={`${video.id}`}>
                                                <div className={cx('video-feed-header')}>
                                                    <div className={cx('video-container')}>
                                                        <div className={cx('image-video')}>
                                                            <Image className={cx('image')} src={video.thumb_url} />
                                                        </div>
                                                        {indexVideo === index && (
                                                            <div className={cx('video')}>
                                                                <video
                                                                    poster={video.thumb_url}
                                                                    ref={(el) => {
                                                                        videoListRef.current[index] = el;
                                                                    }}
                                                                    muted={true}
                                                                    onEnded={() => {
                                                                        indexVideo > user.videos.length - 1
                                                                            ? setIndexVideo(0)
                                                                            : setIndexVideo(indexVideo + 1);
                                                                    }}
                                                                >
                                                                    <source src={video.file_url} type="video/mp4" />
                                                                </video>
                                                            </div>
                                                        )}
                                                        <div className={cx('card-footer')}>
                                                            <IconCaretRight /> <span>{video.views_count}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 className={cx('title-video')}>{video.description}</h1>
                                            </Link>
                                        </div>
                                    );
                                })}
                        </div>
                    ) : (
                        <div className={cx('err-video')}>
                            <IconUser width={'90px'} height={'90px'} />
                            <h1 className={cx('title')}>Tải video đầu tiên của bạn lên</h1>
                            <h2 className={cx('title-sub')}>Video của bạn sẽ xuất hiện tại đây</h2>
                        </div>
                    )}
                </div>
            </div>
            <Modal isOpen={isModal}>
                <UpdateProFileMe
                    handleOnClickClose={() => {
                        setIsModal(false);
                    }}
                />
            </Modal>
        </>
    );
}

export default memo(Profile);

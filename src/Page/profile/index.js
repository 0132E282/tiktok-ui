import classnames from 'classnames/bind';
import { useEffect } from 'react';
import { useReducer, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
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
    IconSetting,
    IconShareFar,
    IconSpan,
    IconTwitter,
    IconUser,
} from '~/icon';
import Image from '~/Images';
import styles from './Profile.module.scss';
import * as userServices from '~/Services/Api/userServices';
import { useState } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
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
    const [videoList, setVideoList] = useState({ type: undefined, videos: [] });
    const [indexVideo, setIndexVideo] = useState(0);
    const [user, setUser] = useState({});
    const { id } = useSelector((state) => state.auth.currentUser);
    const videoListRef = useRef([]);
    useEffect(() => {
        userServices
            .getAnUser({ nickname })
            .then((res) => {
               setVideoList({
                  type: 'video',
                  videos: [...res.videos],
              });
              setUser(res);
            })
            .catch((err) => console.log(err));
    }, [nickname]);
    useEffect(() => {
        const videoPlay = videoListRef.current[indexVideo];
        videoPlay && videoPlay.play();
        return () => {
            videoPlay && videoPlay.pause();
        };
    }, [indexVideo]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('user')}>
                    <Image className={cx('avatar')} src={user.avatar} />
                    <div className={cx('user-container')}>
                        <h1 className={cx('nickname')}>
                            {' '}
                            {user.nickname} <span>{user.tick && <IconCheckBlue width="2rem" height="2rem" />}</span>
                        </h1>
                        <h2 className={cx('name')}>{user.first_name + ' ' + user.last_name}</h2>
                        <Button
                            primary
                            iconLeft={<IconEdit />}
                            className={cx('btn-follow', { 'btn-proFille': id === user.id })}
                            content={id === user.id ? 'Sửa hồ sơ' : 'follow'}
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
                    <p className={cx('tap-item', { active: videoList.type === 'video' })}>video</p>
                    <p className={cx('tap-item')}>
                        <span className={cx('icon')}>
                            <IconKey />
                        </span>{' '}
                        đã thích
                    </p>
                    <div className={cx('video-feed-line')} ref={lineRef}></div>
                </div>
            </div>
            <div className={cx('video-wrapper')}>
                {videoList.videos.length > 0 ? (
                    <div className={cx('video-feed')}>
                        {videoList.videos.map((video, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cx('item')}
                                    onMouseMove={() => {
                                        setIndexVideo(index);
                                    }}
                                >
                                    <Link to="#">
                                        <div className={cx('video-feed-header')}>
                                            <div className={cx('video-container')}>
                                                <div className={cx('image-video')}>
                                                    <Image className={cx('image')} src={video.thumb_url} />
                                                </div>
                                                {indexVideo === index && (
                                                    <div className={cx('video')}>
                                                        <video
                                                            ref={(el) => {
                                                                videoListRef.current[index] = el;
                                                            }}
                                                            src={video.file_url}
                                                            muted={true}
                                                            onEnded={() => {
                                                                setIndexVideo(indexVideo + 1);
                                                            }}
                                                        ></video>
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
    );
}

export default memo(Profile);

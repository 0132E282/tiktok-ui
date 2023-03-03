import classNames from 'classnames/bind';
import { useContext, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    IconMusic,
    IconComment,
    IconLike,
    IconLink,
    IconSend,
    IconFacebook,
    IconTwitter,
    IconShare,
    IconIphone,
    IconListMenu,
} from '~/icon';
import Image from '~/Images';
import { userAction } from '~/reduxSage/userSage/userSilce';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import style from './Header.module.scss';
const cx = classNames.bind(style);

function HeaderContentVideo({
    dataVideo,
    dataUser,
    descriptionVideo,
    music,
    countComment,
    countLike,
    menuActionVideo,
}) {
    const dispatch = useDispatch();
    const { currentUser } = useContext(ProviderServices);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <Image className={cx('avatar')} src={dataUser ? dataUser.avatar : images.userDefault} />
                <div className={cx('info-suer')}>
                    <h1 className={cx('name')}>
                        {dataUser ? <Link to={'/@' + dataUser.nickname + ''}>{dataUser.nickname}</Link> : ''}
                    </h1>
                    <p className={cx('sub-heading')}>
                        {dataUser ? dataUser.first_name + ' ' + dataUser.last_name : ''}
                    </p>
                </div>
                {currentUser.id === dataUser.id ? (
                    <>
                        <Menu className={cx('menu-action')} menuItem={menuActionVideo}>
                            <div className={cx('setting-video')}>
                                <IconListMenu className={cx('menu-list')} />
                            </div>
                        </Menu>
                    </>
                ) : (
                    <Button
                        medium
                        content={dataUser.is_followed ? 'huy bo follow' : 'follow'}
                        onClick={() => {
                            dispatch(userAction.followingAndUnFollow(dataUser));
                        }}
                    />
                )}
            </div>
            <p className={cx('description')}>{descriptionVideo}</p>
            {music ? (
                <a href={'/'} className={cx('music')}>
                    <IconMusic />
                    {music}
                </a>
            ) : (
                ''
            )}
            <div className={cx('container')}>
                <div className={cx('flex-center')}>
                    <div className={cx('flex-center_item')}>
                        <button
                            type={'button'}
                            className={cx('btn-action')}
                            onClick={() => {
                                dispatch(userAction.likeAndUnLikeVideo(dataVideo));
                            }}
                        >
                            <span className={cx('icon-action', { liked: dataVideo.is_liked })}>
                                <IconLike width={'17.5px'} height={'16px'} />
                            </span>
                            {countLike}
                        </button>
                        <button type={'button'} className={cx('btn-action')}>
                            <span className={cx('icon-action')}>
                                <IconComment width={'17.5px'} height={'16px'} />
                            </span>
                            {countComment}
                        </button>
                    </div>
                    <div className={cx('flex-center_item')}>
                        <button type={'button'} className={cx('btn-action')}>
                            <IconLink width={'24px'} height={'24px'} />
                        </button>
                        <button type={'button'} className={cx('btn-action')}>
                            <IconSend width={'24px'} height={'24px'} />
                        </button>
                        <button type={'button'} className={cx('btn-action')}>
                            <IconFacebook width={'24px'} height={'24px'} />
                        </button>
                        <button type={'button'} className={cx('btn-action')}>
                            <IconIphone width={'24px'} height={'24px'} />
                        </button>
                        <button type={'button'} className={cx('btn-action')}>
                            <IconTwitter width={'24px'} height={'24px'} />
                        </button>
                        <button type={'button'} className={cx('btn-action')}>
                            <IconShare width={'24px'} height={'24px'} />
                        </button>
                    </div>
                </div>
                <div className={cx('link-video')}>
                    <p className={cx('link-text')}>
                        https://www.tiktok.com/@userqyny9lvu2d/video/7189993845562576129?is_from_webapp=1&sender_device=pc&web_id=7186614605694961154
                    </p>
                    <Button className={cx('btn-action-copy')} content={'Sao chép liên kết'} />
                </div>
            </div>
        </div>
    );
}

export default HeaderContentVideo;

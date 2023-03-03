import classNames from 'classnames/bind';
import images from '~/assets/img';
import { IconLike, IconListMenu } from '~/icon';
import Image from '~/Images';
import style from './comment.module.scss';
import Menu from '~/components/Popper/Menu';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import { useMemo, useContext } from 'react';
import Button from '~/components/Button';
const cx = classNames.bind(style);
function ItemComment({ data, clickDelete, handleOnLickLike }) {
    const { currentUser } = useContext(ProviderServices);
    const ACTION_SETTING_VIDEO = useMemo(
        function () {
            return [
                {
                    title: 'xóa',
                    handleLickAction: clickDelete,
                },
            ];
        },
        [clickDelete],
    );
    return (
        <div className={cx('item-comment')}>
            <div className={cx('avatar')}>
                <Image src={data ? data.user.avatar : images.userDefault} />
            </div>
            <div className={cx('comment-container')}>
                <h1 className={cx('nickname')}>
                    {data ? <a href={'/' + data.nickname + ''}>{data.user.nickname}</a> : ''}
                </h1>
                <p className={cx('text-comment')}>{data ? data.comment : ''}</p>
                <div className={cx('sub-comment')}>
                    <span> {data ? data.updated_at : ''}</span> <button>Trả lời</button>
                </div>
            </div>
            <div className={cx('action')}>
                <>
                    <Menu
                        className={cx('menu-action')}
                        menuItem={data && currentUser.id === data.user.id ? [...ACTION_SETTING_VIDEO] : []}
                        hideOnClick={true}
                    >
                        <div className={cx('setting-video')}>
                            <IconListMenu className={cx('menu-list')} />
                        </div>
                    </Menu>
                </>
                <Button onClick={handleOnLickLike} className={cx('btnLike', { like: data.is_liked })}>
                    <IconLike width="2rem" height="2rem" /> <span>{data ? data.likes_count : ''}</span>
                </Button>
            </div>
        </div>
    );
}

export default ItemComment;

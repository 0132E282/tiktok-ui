import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';
import { useState, useEffect, useContext } from 'react';

import { IconHome, IconLive, IconFollowing, IconTag, IconMusic } from '~/icon';
import configRoutes from '~/config/routes';
import Menu, { ItemMenu } from './componentsSidebar/Menu';
import SuggestedAccount from './componentsSidebar/suggestedAccount';
import * as userServices from '~/Services/Api/userServices';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import Button from '~/components/Button';
import Modal from '~/components/modal';
import MethodLoginModal from '~/components/modal/ListMenuItem/methodLogin/MethodLogin';
import { useSelector } from 'react-redux';
import store from '~/redux';
const cx = classnames.bind(styles);

const INIT_PAGE = 1;
const INIT_PER = 5;
const LIST_TAG_DISCOVER = [
    {
        title: 'suthatla',
        icon: <IconTag />,
    },
    {
        title: 'mackedoi',
        icon: <IconTag />,
    },
    {
        title: 'sansangthaydoi',
        icon: <IconTag />,
    },
    {
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
        icon: <IconMusic />,
    },
    {
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
        icon: <IconMusic />,
    },
    {
        title: '7749hieuung',
        icon: <IconTag />,
    },
    {
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
        icon: <IconMusic />,
    },
];
const LIST_FOOTER = [
    ['Giới', 'thiệuBảng', 'tinLiên', 'hệSự', 'nghiệpByteDance'],
    [
        'TikTok',
        'for Good',
        'Quảng cáo',
        'Developers',
        'Transparency ',
        'TikTok',
        ' RewardsTikTok',
        'BrowseTikTok',
        'Embeds',
    ],
    ['Trợ giúp', 'An toàn', 'Điều khoản', 'Quyền riêng tư'],
    ['Creator Portal', 'Hướng dẫn Cộng đồng'],
];

const listMenuSidebar = [
    {
        title: 'danh sách chọn',
        icon: (
            <IconHome
                width={'3.2rem'}
                height={'3.2rem'}
                className={cx('icon-active')}
                color={'rgba(22, 24, 35, 1.0)'}
            />
        ),
        link: configRoutes.home,
    },
    {
        title: 'đang following',
        icon: <IconFollowing width={'3.2rem'} height={'3.2rem'} color={'rgba(22, 24, 35, 1.0)'} />,
        link: configRoutes.following,
    },
    {
        title: 'live',
        icon: <IconLive width={'3.2rem'} height={'3.2rem'} color={'rgba(22, 24, 35, 1.0)'} />,
        link: configRoutes.profile,
    },
];
function Sidebar({ className }) {
    const isLogin = useSelector((state) => state.auth.isLogin);
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [followingUser, setFollowingUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const currentUser = useSelector((state) => state.auth.currentUser);
    const [isModal, setIsModal] = useState(false);
    const renderMenuSidebar = () => {
        return (
            <Menu>
                {listMenuSidebar.map((Item, index) => {
                    return <ItemMenu key={index} title={Item.title} icon={Item.icon} to={Item.link} />;
                })}
            </Menu>
        );
    };
    useEffect(() => {
        userServices
            .getSuggested({ page, perPage: INIT_PER })
            .then((res) => {
                setSuggestedUser((prevUser) => [...prevUser, ...res]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);
    useEffect(() => {
        userServices
            .getFlowingUsers({ page: 1 })
            .then((res) => {
                res && setFollowingUser((prevUser) => [...prevUser, ...res]);
            })
            .catch((err) => console.log(err));
    }, [currentUser]);
    const handleSeeAll = () => {
        if (page <= 1) {
            setPage(page + 1);
        } else {
            setPage(INIT_PAGE);
        }
    };
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('menu-sidebar')}>{renderMenuSidebar()}</div>
            <div className={cx('account-user')}>
                {isLogin ? (
                    <SuggestedAccount
                        data={suggestedUser}
                        title={'Tài khoản được đề xuất'}
                        btnContentNext={page <= 1 ? 'xem tat ca' : 'Ẩn bớt'}
                        onSeeAll={handleSeeAll}
                    />
                ) : (
                    <div className={cx('not-login')}>
                        <p className={cx('user-content')}>
                            Đăng nhập để follow các tác giả, thích video và xem bình luận.
                        </p>
                        <Button
                            invadersW
                            className={'btn-sidebar_login'}
                            content={'đăng nhập'}
                            onClick={() => !isLogin && setIsModal(true)}
                        />
                    </div>
                )}
                {isLogin ? (
                    <SuggestedAccount
                        data={followingUser}
                        title={'tài khoản đã follow'}
                        btnContentNext={'xem tất cả'}
                        onSeeAll={handleSeeAll}
                    />
                ) : (
                    <SuggestedAccount
                        data={suggestedUser}
                        title={'Tài khoản được đề xuất'}
                        btnContentNext={page <= 1 ? 'xem tất cả' : 'Ẩn bớt'}
                        onSeeAll={handleSeeAll}
                    />
                )}
            </div>
            <div className={cx('sidebar-tag')}>
                <h4 className={cx('sidebar-tag__heading')}>khám phá</h4>
                <div className={cx('container')}>
                    {LIST_TAG_DISCOVER.map((item, index) => {
                        return (
                            <div key={index} className={cx('tag-discover')}>
                                <Button className={cx('btn-tag')} small iconLeft={item.icon} content={item.title} />
                            </div>
                        );
                    })}
                </div>
                <div className={cx('footer')}>
                    {LIST_FOOTER.map((listMenu, index) => {
                        return (
                            <ul key={index} className={cx('menu')}>
                                {listMenu.map((item, index) => {
                                    return (
                                        <li key={index} className={cx('list-menu-item')}>
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                    <p className={cx('see-more__footer')}>thêm</p>
                    <span className={cx('span_copyright')}>© 2022 TikTok</span>
                </div>
            </div>
            <Modal isOpen={isModal}>
                <MethodLoginModal
                    onClickClose={() => {
                        setIsModal(false);
                    }}
                />
            </Modal>
        </div>
    );
}
export default Sidebar;

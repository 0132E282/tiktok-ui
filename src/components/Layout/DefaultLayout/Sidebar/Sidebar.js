import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';
import { useState, useEffect } from 'react';


import { IconHome, IconLive, IconFollowing } from '~/icon';
import configRoutes from '~/config/routes';
import Menu, { ItemMenu } from './componentsSidebar/Menu';
import SuggestedAccount from './componentsSidebar/suggestedAccount';
import * as userServices from '~/Services/Api/userServices';
const c = classnames.bind(styles);

const INIT_PAGE = 1;
const INIT_PER = 5;
function Sidebar() {
    const listMenuSidebar = [
        {
            title: 'danh sách chọn',
            icon: (
                <IconHome
                    width={'3.2rem'}
                    height={'3.2rem'}
                    className={c('icon-active')}
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
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
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

    const handleSeeAll = () => {
        setPage(page + 1);
    };
    return (
        <div className={c('wrapper')}>
            {renderMenuSidebar()}
            <div className={c('user')}>
                <SuggestedAccount
                    data={suggestedUser}
                    title={'Tài khoản được đề xuất'}
                    btnContentNext={'xem tat ca'}
                    onSeeAll={handleSeeAll}
                 />
                 <SuggestedAccount
                    data={suggestedUser}
                    title={'Các tài khoản đang follow'}
                    btnContentNext={'Xem thêm'}
                    onSeeAll={handleSeeAll}
                 />
            </div>
            <div className={c('suggestedUser')}>
               
            </div>
        </div>
    );
}
export default Sidebar;

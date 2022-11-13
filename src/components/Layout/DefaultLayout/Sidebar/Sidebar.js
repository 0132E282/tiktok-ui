import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';
import { useState, useEffect, useContext } from 'react';


import { IconHome, IconLive, IconFollowing } from '~/icon';
import configRoutes from '~/config/routes';
import Menu, { ItemMenu } from './componentsSidebar/Menu';
import SuggestedAccount from './componentsSidebar/suggestedAccount';
import * as userServices from '~/Services/Api/userServices';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import Button from '~/components/Button';
import Modal from '~/components/modal';
import MethodLoginModal from '~/components/modal/ListMenuItem/methodLogin/MethodLogin';
const cx = classnames.bind(styles);

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
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [isModal,setIsModal] = useState(false);
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
        if(page <= 1){
          setPage(page + 1);
        }else{
            setPage(INIT_PAGE);
        }
    };
    const {isLogin} = useContext(ProviderServices)
    return (
        <div className={cx('wrapper')}>
            {renderMenuSidebar()}
            <div className={cx('user')}>
                {isLogin ?  <SuggestedAccount
                    data={suggestedUser}
                    title={ 'Tài khoản được đề xuất'}
                    btnContentNext={page <=1 ? 'xem tat ca' : 'Ẩn bớt'}
                    onSeeAll={handleSeeAll}
                 />: <div className={cx('not-login')}>
                  <p className={cx('user-content')}>
                     Đăng nhập để follow các tác giả, thích video và xem bình luận.
                  </p>
                   <Button  
                        invadersW 
                        className={'btn-sidebar_login'} 
                        content={'đăng nhập'} 
                        onClick={()=> !isLogin&&setIsModal(true)}
                   />
                 </div>
                }
                {isLogin ?  <SuggestedAccount
                    data={suggestedUser}
                    title={'tài khoản đã follow'}
                    btnContentNext={'xem tất cả'}
                    onSeeAll={handleSeeAll}
                 />: 
                  <SuggestedAccount
                    data={suggestedUser}
                    title={ 'Tài khoản được đề xuất'}
                    btnContentNext={page <=1 ? 'xem tất cả' : 'Ẩn bớt'}
                    onSeeAll={handleSeeAll}
                 />
                }
            </div>
            <div className={cx('suggestedUser')}>
               
            </div>
            <Modal isOpen={isModal }>
                <MethodLoginModal onClick={()=>{setIsModal(false);}} />
            </Modal>
        </div>
    );
}
export default Sidebar;

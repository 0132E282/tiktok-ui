import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import MethodLoginModal from '~/components/modal/ListMenuItem/methodLogin/MethodLogin';
import Modal from '~/components/modal/Modal';
import styles from './Header.module.scss';
import images from '~/assets/img';
import { Search } from '~/components/Layout/components';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/Images';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import {
    IconAdd,
    IconListMenu,
    IconNotifications,
    IconMessage,
} from '~/icon';
import { MENU_ITEM , userMenu } from '~/components/Popper/Menu/ListMenuItem';
const c = classNames.bind(styles);

const isLogin = false;

function Header() {
    const [isModal, setIsModal] = useState(false);
    const handleMenuChanges = (menuItem) => {
        console.log(menuItem);
    };
    const openModal = () => {
        setIsModal(true);
    };
    return (
        <div className={c('wrapper')}>
            <div className={c('navbar')}>
                <div className={c('logo')}>
                    <Link to={routesConfig.home} className={c('logo-link')}>
                        <img src={images.logoTiktok} alt={'logo tiktok ui'} />
                    </Link>
                </div>
                <Search />
                <div className={c('user')}>
                    {isLogin ? (
                        <>
                            <Button medium iconLeft={<IconAdd color="#161823" />} content={'tải lên'} />
                            <Tippy interactive={true} content={'Thông Báo'}>
                                <button className={c('action-btn')}>
                                    <IconMessage width={'2.6rem'} height={'2.6rem'} />
                                </button>
                            </Tippy>
                            <Tippy interactive={true} content={'Tin nhắn'}>
                                <button className={c('action-btn')}>
                                    <IconNotifications width={'3.2rem'} height={'3.2rem'} />
                                </button>
                            </Tippy>

                            <Menu onChange={handleMenuChanges} menuItem={isLogin ? userMenu : MENU_ITEM}>
                                <button className={c('btn-setting')}>
                                    <Image
                                        src={
                                            'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1658937600&x-signature=cBqjUB51n%2BRTrWWXBJj7Rjl7dJ4%3D'
                                        }
                                        width={'32px'}
                                        height={'32px'}
                                        className={c('avatar-user')}
                                    />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button medium iconLeft={<IconAdd color="#161823" />} content={'tải lên'} onClick={openModal} />
                            <Button primary content={'đăng nhập'} className={'setting-btn'} onClick={openModal} />
                            <Menu onChange={handleMenuChanges} menuItem={MENU_ITEM} hideOnClick={true}>
                                <button className={c('btn-setting')}>
                                    <IconListMenu color={'#161823'} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
                <Modal isOpen={isModal}>
                    <MethodLoginModal onClick={()=>{setIsModal(false);}} />
                </Modal>
            </div>
        </div>
    );
}

export default Header;

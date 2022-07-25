import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from "~/assets/img";
import { Search } from '~/components/Layout/components';
import Button from '~/components/Button';
import Menu from "~/components/Popper/Menu";
import Image from "~/Images";
import { IconAdd, IconListMenu, IconLanguages, IconSetting, IconShortcuts, IconNotifications, IconMessage, IconHelp, IconUser, IconCoin, IconLogout } from "~/icon";
const c = classNames.bind(styles);
const MENU_ITEM = [
    {
        title: 'Tiếng Việt',
        icon: <IconLanguages color={'#161823'} />,
        children: {
            title: 'ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'english'
                },
                {
                    code: 'vi',
                    title: 'tiếng việt'
                }
            ]
        }
    },
    {
        title: 'trợ giúp',
        icon: <IconHelp color={'#161823'} />,
        to: './setting'
    },
    {
        title: 'Các Phím Tắc',
        icon: <IconShortcuts color={'#161823'} />
    }
]
const userMenu = [
    {
        title: 'trang cá nhân',
        icon: <IconUser color={'#161823'} width={'2rem'} height={'2rem'} />
    },
    {
        title: 'nhận xu',
        icon: <IconCoin width={'2rem'} height={'2rem'} />
    },
    {
        title: 'cài đặt',
        icon: <IconSetting color={'#161823'} />,
    },
    ...MENU_ITEM,
    {
        separate: true,
        title: 'đăng xuất',
        icon: <IconLogout />
    }
]
const isLogin = true;
function Header() {
    const handleMenuChanges = (menuItem) => {
        console.log(menuItem);
    }
    return <div className={c('wrapper')}>
        <div className={c('navbar')}>
            <div className={c('logo')}>
                <img src={images.logoTiktok} alt={'logo tiktok ui'} />
            </div>
            <Search />
            <div className={c('user')}>
                {isLogin ? (
                    <>
                        <Button medium iconLeft={<IconAdd color="#161823" />} content={"tải lên"} />
                        <Tippy
                            interactive={true}
                            content={'Thông Báo'}
                        >
                            <button className={c('action-btn')}>
                                <IconMessage width={'2.6rem'} height={'2.6rem'} />
                            </button>
                        </Tippy>
                        <Tippy
                            interactive={true}
                            content={'Tin nhắn'}
                        >
                            <button className={c('action-btn')}>
                                <IconNotifications width={'3.2rem'} height={'3.2rem'} />
                            </button>
                        </Tippy>


                        <Menu
                            onChange={handleMenuChanges}
                            menuItem={isLogin ? userMenu : MENU_ITEM}
                        >
                            <button className={c('btn-setting')}>
                                <Image width={'32px'} height={'32px'} className={c('avatar-user')} />
                            </button>
                        </Menu>
                    </>
                ) : (
                    <>
                        <Button medium iconLeft={<IconAdd color="#161823" />} content={"tải lên"} />
                        <Button primary content={"đăng nhập"} className={'setting-btn'} />
                        <Menu
                            onChange={handleMenuChanges}
                            menuItem={MENU_ITEM}
                        >
                            <button className={c('btn-setting')}>
                                <IconListMenu color={'#161823'} />
                            </button>
                        </Menu>
                    </>
                )}
            </div>

        </div>

    </div>;
}

export default Header;
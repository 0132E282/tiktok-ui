import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from "~/assets/img";
import { Search } from '~/components/Layout/components';
import Button from '~/components/Button';
import Menu from "~/components/Popper/Menu";
import { IconAdd, IconListMenu, IconLanguages, IconSettings, IconShortcuts } from "~/icon";

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
        title: 'Setting',
        icon: <IconSettings color={'#161823'} />,
        to: './setting'
    },
    {
        title: 'Các Phím Tắc',
        icon: <IconShortcuts color={'#161823'} />
    }
]
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
            </div>

        </div>

    </div>;
}

export default Header;
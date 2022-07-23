import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from "~/assets/img";
import { Search } from '~/components/Layout/components';
import Button from '~/components/Button';
import { IconAdd, IconListMenu } from "~/icon";
const c = classNames.bind(styles);
function Header() {
    return <div className={c('wrapper')}>
        <div className={c('navbar')}>
            <div className={c('logo')}>
                <img src={images.logoTiktok} alt={'logo tiktok ui'} />
            </div>
            <Search />
            <div className={c('user')}>
                <Button medium iconLeft={<IconAdd color="#161823" />} content={"tải lên"} />
                <Button primary content={"đăng nhập"} className={'setting-btn'} />
                <Tippy
                    render={attrs => (
                        <div className={c('list-user')} tabIndex="-1" {...attrs} >
                            my list
                        </div>
                    )}
                >
                    <button className={c('btn-setting')}>
                        <IconListMenu color={'#161823'} />
                    </button>
                </Tippy>
            </div>

        </div>

    </div>;
}

export default Header;
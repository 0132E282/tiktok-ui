import classNames from "classnames/bind";

import styles from './Header.module.scss';
import images from "~/assets/img";
import { Search } from '~/components/Layout/components'
const c = classNames.bind(styles);
function Header() {
    return <div className={c('wrapper')}>
        <div className={c('navbar')}>
            <div className={c('logo')}>
                <img src={images.logoTiktok} alt={'logo tiktok ui'} />
            </div>
            <Search />
            <div className={c('user')}>

            </div>
        </div>

    </div>;
}

export default Header;
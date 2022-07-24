import classNames from "classnames/bind";
import styles from './Menu.module.scss';
const c = classNames.bind(styles);
function Header({ title, icon, onBack }) {
    return <header className={c('header')}>
        <button className={c('btn-back')} onClick={onBack}>
            {icon}
        </button>
        <h4 className={c('header-title')}>{title}</h4>
    </header>
}

export default Header;

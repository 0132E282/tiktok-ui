import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
const c = classNames.bind(styles);
function Header({ title, icon, onBack }) {
    return (
        <header className={c('header')}>
            <button className={c('btn-back')} onClick={onBack}>
                {icon}
            </button>
            <h4 className={c('header-title')}>{title}</h4>
        </header>
    );
}
Header.prototype = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onBack: PropTypes.func,
};
export default Header;

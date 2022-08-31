import styles from './menu.module.scss';
import classnames from 'classnames/bind';
const c = classnames.bind(styles);
function Menu({ children }) {
    return <nav className={c('wrapper')}>{children}</nav>;
}
export default Menu;

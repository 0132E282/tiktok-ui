import styles from './menu.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import PropStyes from 'prop-types';
const c = classnames.bind(styles);
function ItemMenu({ title, icon, to, ...prop }) {
    return (
        <NavLink to={to} className={(nav) => c('menu-item', { active: nav.isActive })} {...prop}>
            {icon}
            <span className={c('menu-item_title')}>{title}</span>
        </NavLink>
    );
}
ItemMenu.PropStyes = {
    title: PropStyes.string.isRequired,
    icon: PropStyes.string,
};
export default ItemMenu;

import className from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const c = className.bind(styles);
function MenuItem({ key, data, onClick }) {
    return (
        <Button className={c('menu-item')} iconLeft={data.icon} content={data.title} key={key} onClick={onClick} />
    );
}

export default MenuItem;
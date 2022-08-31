import className from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const c = className.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = c('menu-item', {
        separate: data.separate,
    });
    return <Button className={classes} iconLeft={data.icon} content={data.title} onClick={onClick} />;
}

export default MenuItem;

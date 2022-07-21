import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';
const c = classnames.bind(styles);
function Sidebar() {
    return <div className={c('wrapper')}>
        sidebar
    </div>;
}

export default Sidebar;
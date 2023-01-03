import classnames from 'classnames/bind';
import { Header } from '../components';
import Sidebar from '../DefaultLayout/Sidebar';
import styles from './LayoutFull.module.scss';
const cx = classnames.bind(styles);
function LayoutFull({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar className={cx('sidebar-full')} />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutFull;

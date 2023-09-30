import { Header } from '../components';
import styles from './LayoutNotSibar.model.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function LayoutNotSidebar({ children }) {
    return (
        <div className={cx('warper')}>
            <header>
                <Header />
            </header>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default LayoutNotSidebar;

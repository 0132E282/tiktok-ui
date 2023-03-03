import classNames from 'classnames/bind';
import style from './DetailVideoLayout.module.scss';
const cx = classNames.bind(style);
function DetailVideoLayout({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default DetailVideoLayout;

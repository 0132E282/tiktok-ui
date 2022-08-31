import classnames from 'classnames/bind';
import styles from './Modal.module.scss';
import Portal from '~/components/portal';
const cx = classnames.bind(styles);
function Modal({ isOpen = false, children }) {
    if (!isOpen) return null;
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('overplay')} />
                <div className={cx('content')}>{children}</div>
            </div>
        </Portal>
    );
}

export default Modal;

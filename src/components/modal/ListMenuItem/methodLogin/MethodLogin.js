import classnames from 'classnames/bind';
import { ListMenuMethods } from './listMenu';
import PropTypes from 'prop-types';
import styles from './MethodLogin.module.scss';
import MethodLoginItem from './MethodLoginItem';
import { IconClose } from '~/icon';
const cx = classnames.bind(styles);
function MethodLoginModal({onClick}) {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('close')} onClick={onClick} > <IconClose width={'2.5rem'} height={'2.5rem'} /> </button>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Đăng nhập vào TikTok </h1>
                <div className={cx('item-list')}>
                    {ListMenuMethods.map((item,index)=>{
                        return <MethodLoginItem key={index} value={item}/>
                    })}
                </div>
            </div>
            <div className={cx('footer')}>Bạn không có tài khoản? <a className={cx('footer-link')} href='/'> đắng ký</a></div>
        </div>
    );

}
MethodLoginModal.prototype = {
    onClick : PropTypes.func.isRequired,
}
export default MethodLoginModal;

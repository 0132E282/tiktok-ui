import classnames from 'classnames/bind';
import { ListMenuMethods } from './listMenu';
import PropTypes from 'prop-types';
import styles from './MethodLogin.module.scss';
import * as forms from '~/Forms/Forms';
import MethodLoginItem from './MethodLoginItem';
import { IconClose } from '~/icon';
import { useReducer } from 'react';
const cx = classnames.bind(styles);
function MethodLoginModal({onClick}) {
    function actionInputForm(start,action){
        switch(action){
            case 'LOGION-ACCOUNT':
                return forms.LoginByAccount;
            default :
             alert('chức năng chưa được cập nhập');
        }
    }
    const initialInputForm = function(){
      return  <>
            <h1 className={cx('heading')}>Đăng nhập vào TikTok </h1>
            <div className={cx('item-list')}>
                {ListMenuMethods.map((item,index)=>{
                    return <MethodLoginItem onClick={()=>{
                        dispatch(item.action)
                    }} key={index} value={item}/>
                })}
            </div>
        </>
    }
    const [InputForm,dispatch] = useReducer(actionInputForm,initialInputForm);
    return (<div className={cx('wrapper')}>
            <button className={cx('close')} onClick={onClick} > <IconClose width={'2.5rem'} height={'2.5rem'} /> </button>
            <div className={cx('container')}>
               <InputForm/>
            </div>
            <div className={cx('footer')}>Bạn không có tài khoản? <a className={cx('footer-link')} href='/'> đắng ký</a></div>
        </div>
    );

}
MethodLoginModal.prototype = {
    onClick : PropTypes.func.isRequired,
}
export default MethodLoginModal;

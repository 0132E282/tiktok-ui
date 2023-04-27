import classnames from 'classnames/bind';
import { ListMenuMethods } from './listMenu';
import PropTypes from 'prop-types';
import styles from './MethodLogin.module.scss';
import FormAuth from '~/components/Forms/FormAuth';
import MethodLoginItem from './MethodLoginItem';
import { IconBack, IconClose } from '~/icon';
import { useReducer } from 'react';
import Button from '~/components/Button/Button';
import { useState } from 'react';
const cx = classnames.bind(styles);
function MethodLoginModal({ onClickClose }) {
    function actionInputForm(start, action) {
        switch (action) {
            case 'LOGION-ACCOUNT':
                return {
                    isBtnBack: true,
                    from: FormAuth,
                };
            default:
                return {
                    isBtnBack: false,
                    from: initialInputForm,
                };
        }
    }
    const initialInputForm = function () {
        return (
            <div className={'wrapper'}>
                <h1 className={cx('heading')}>Đăng nhập vào TikTok </h1>
                <div className={cx('item-list')}>
                    {ListMenuMethods.map((item, index) => {
                        return (
                            <MethodLoginItem
                                key={index}
                                value={item}
                                onClick={() => {
                                    dispatch(item.action);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };
    const [InputForm, dispatch] = useReducer(actionInputForm, { isBtnBack: false, from: initialInputForm });
    const Form = InputForm.from;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                {InputForm.isBtnBack && (
                    <Button className={cx('btn-back')} circle onClick={() => dispatch('BACK')}>
                        <IconBack width={'2.5rem'} height={'2.5rem'} />
                    </Button>
                )}
                <Button className={cx('btn-close')} circle onClick={onClickClose}>
                    <IconClose width={'2.5rem'} height={'2.5rem'} />
                </Button>
            </div>
            <div className={cx('container')}>
                <Form />
            </div>
            <div className={cx('footer')}>
                Bạn không có tài khoản?{' '}
                <a className={cx('footer-link')} href="/">
                    {' '}
                    đắng ký
                </a>
            </div>
        </div>
    );
}
MethodLoginModal.prototype = {
    onClick: PropTypes.func.isRequired,
};
export default MethodLoginModal;

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import style from './Forms.module.scss';
import { IconClosedEyes ,IconEyes } from '~/icon';
import * as userServices from '~/Services/Api/userServices';

import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm  } from 'react-hook-form';
import { useEffect  ,useContext} from 'react';

import { ProviderServices } from '~/Services/provider/ProviderGlobal';
const cx = classNames.bind(style);
export const LoginByAccount = () => {
  const { infoAccount,setInfoAccount} = useContext(ProviderServices);
  const idFormUser = useId();
  const [isShowPassword,setIsShowPassword] = useState(false);
  const {handleSubmit,register,formState :{errors}} = useForm();
  const [formData,setFormData] = useState();
  useEffect(()=>{
    if(formData) userServices.postLogin({email : formData.email, password : formData.password})
    .then((res)=>{setInfoAccount(res)})
    .catch((err)=>{console.log(err)})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[formData])
    return (<>
    { console.log(infoAccount)}
        <form method="POST"  className={cx('formAccount')} onSubmit={handleSubmit((data)=>{
          setFormData(data)
        })}>
          <h1 className={cx('heading')}> Đăng nhập </h1>
          <div className={cx('breadcrumbs')}> <span> Email hoặc TikTok ID</span>  <Link to="/" className={cx('form-link')}>Đăng nhập bằng số điện thoại</Link></div>
          <div className={cx('form_input')}>
            <div className={cx('input')}>
              <input id={idFormUser} type={'email'} {...register('email',
               {required : 'vui lồng nhập email'} 
              )} placeholder="Nhập Email"/>
            </div>
            <p className={cx('err')}>{errors.email?.message}</p>
          </div>
          <div className={cx('form_input')} >
            <div className={cx('input')}>
              <input type={isShowPassword?'text':'password'} {...register('password',{required : 'vui lòng nhập password' })} placeholder="Mật Khẩu"/>
              <span className={cx('icon-show-password')} onClick={()=> isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true)}>
                   {!isShowPassword ? <IconClosedEyes/> :<IconEyes />}
              </span>
            </div>
            <p className={cx('err')}>{errors.password?.message}</p>
          </div>
          <Link to={'#'} className={cx('form-link')}>Đăng nhập với Mật khẩu </Link>
          <Button  type={'submit'} className={cx('btn-active_form')} invadersW content={"Đăng nhập"}/>
        </form>
    </> );
}
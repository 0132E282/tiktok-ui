import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './MethodLogin.module.scss';
const cx = classnames.bind(styles);


function MethodLoginItem({value , onClick}) {
    let Type = 'button';
    if(value.to){
        Type = Link;
    }
    return ( 
        <Type onClick={onClick} className={cx('item')} >
           <span className={cx('icon')}>{value.icon}</span>
           <span className={cx('title')}>{value.title}</span>
        </Type>
    );
    
}

export default MethodLoginItem;
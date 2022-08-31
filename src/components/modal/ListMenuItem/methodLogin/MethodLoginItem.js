import classnames from "classnames/bind";

import styles from './MethodLogin.module.scss';
const cx = classnames.bind(styles);


function MethodLoginItem({value}) {
    let Type = 'div';
    return ( 
        <Type className={cx('item')}>
           <span className={cx('icon')}>{value.icon}</span>
           <span className={cx('title')}>{value.title}</span>
        </Type>
    );
}

export default MethodLoginItem;
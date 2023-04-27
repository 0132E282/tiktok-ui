import style from './bellPage.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
const cx = classNames.bind(style);

const config = {
    duration: 3000,
};
function BellPage({ children, onClickBell, isOpen = false }) {
    const bellRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            bellRef.current.style = 'display: none';
        }, config.duration);
    });
    return (
        <div ref={bellRef} className={cx('wrapper', { open: isOpen })} onClick={onClickBell}>
            {children}
        </div>
    );
}
BellPage.prototype = {
    onClickBell: PropTypes.func,
    openBellPage: PropTypes.bool,
};
export default BellPage;

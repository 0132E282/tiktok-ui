import classnames from 'classnames/bind';
import styles from './Popper.module.scss';
const c = classnames.bind(styles);
function Wrapper({ children, className }) {
    return < div className={c('wrapper', className)}>
        {children}
    </ div>;
}

export default Wrapper;
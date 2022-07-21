import classnames from 'classnames/bind';
import styles from './Popper.module.scss';
const c = classnames.bind(styles);
function Wrapper({ children }) {
    return < div className={c('wrapper')}>
        {children}
    </ div>;
}

export default Wrapper;
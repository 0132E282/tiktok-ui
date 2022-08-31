import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Popper.module.scss';
const c = classnames.bind(styles);
function Wrapper({ children, className }) {
    return <div className={c('wrapper', className)}>{children}</div>;
}
Wrapper.prototype = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Wrapper;

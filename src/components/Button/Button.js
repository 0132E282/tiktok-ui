import classnames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const c = classnames.bind(styles);
function Button({
    key,
    to,
    href,
    onClick,
    content,
    icon,
    iconLeft,
    iconRight,
    className,
    disabled,
    // size btn
    invadersW,
    small,
    medium,
    primary,
    circle,
    ...PropPass
}) {
    let TypeBtn = 'button';

    const Prop = {
        onClick,
        ...PropPass,
    };
    if ((to && !href) || (href && !to)) {
        if (to) {
            Prop.to = to;
            TypeBtn = Link;
        } else if (href) {
            Prop.href = href;
            TypeBtn = 'a';
        }
    } else if (to && href) {
        console.error('Invalid button type at file Button');
    }
    const classes = c('wrapper', {
        [className]: className,
        small,
        medium,
        primary,
        circle,
        disabled,
        invadersW,
    }); // default , small , medium , large ...
    if (disabled) {
        Object.keys(Prop).forEach((key) => {
            if (key.startsWith('on') && typeof Prop[key] === 'function') {
                delete Prop[key];
            }
        });
    }
    return (
        <TypeBtn className={classes} onClick {...Prop}>
            {iconLeft && <span className={c('icon-left')}>{iconLeft}</span>}
            {content ? content : icon}
            {iconRight && <span className={c('icon-right')}>{iconRight}</span>}
        </TypeBtn>
    );
}
Button.prototype = {
    key: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    content: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    // size btn : PropTypes
    small: PropTypes.bool,
    medium: PropTypes.bool,
    primary: PropTypes.bool,
    circle: PropTypes.bool,
};
export default Button;

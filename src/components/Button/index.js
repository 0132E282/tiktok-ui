import classnames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const c = classnames.bind(styles);
function Button({
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
    small,
    medium,
    primary,
    circle,
    ...PropPass
}) {
    let TypeBtn = 'button';

    const Prop = {
        onClick,
        ...PropPass
    }
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
        disabled
    });// default , small , medium , large ...
    if (disabled) {
        Object.keys(Prop).forEach(key => {
            if (key.startsWith('on') && typeof Prop[key] === 'function') {
                delete Prop[key];
            }
        })
    }
    return <TypeBtn className={classes} {...Prop} onClick={onClick}>
        {iconLeft && <span className={c('icon-left')}>{iconLeft}</span>}
        {content ? content : icon}
        {iconRight && <span className={c('icon-right')} >{iconRight}</span>}
    </TypeBtn>;
}

export default Button;
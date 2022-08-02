import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';


import Images from '~/Images';
import styles from './Account.module.scss';
const c = classnames.bind(styles);
function accountItem({ name, nickname, avatar, link, ...attrs }) {
    return <Link to={`@${link}`} className={c('wrapper')} {...attrs}>
        <Images className={c('avatar')} src={avatar} />
        <div className={c('content')}>
            <div className={c('name')}>
                {name ?? 'user'}
                <span className={c('name_tick')}>

                </span>
            </div>
            <div className={c('nickname')}>
                {nickname}
            </div>
        </div>
    </Link>;
}

export default accountItem;
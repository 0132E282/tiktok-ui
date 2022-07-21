import classnames from 'classnames/bind';

import Images from '~/Images';
import styles from './Account.module.scss';
const c = classnames.bind(styles);
function accountItem({ tabIndex = '-1', name, nickname, avatar, ...attrs }) {
    return <div className={c('wrapper')} tabIndex={tabIndex} {...attrs}>
        <Images className={c('avatar')} src={avatar} />
        <div className={c('content')}>
            <div className={c('name')}>
                {name ?? 'user'}
            </div>
            <div className={c('nickname')}>
                {nickname}
            </div>
        </div>
    </div>;
}

export default accountItem;
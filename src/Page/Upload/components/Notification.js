import classNames from 'classnames/bind';
import { useContext } from 'react';
import Button from '~/components/Button';
import routes from '~/config/routes';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import style from './Notification.module.scss';
const cx = classNames.bind(style);
function Notification({ closeNotification }) {
    const { currentUser } = useContext(ProviderServices);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}> Video của bạn đang được tải lên TikTok!</h1>
            <div className={cx('container')}>
                <Button onClick={closeNotification} primary content={'tải video khác'} />
                <Button medium to={'/@' + currentUser.nickname + ''} content={'xem hồ sơ'} />
            </div>
        </div>
    );
}

export default Notification;

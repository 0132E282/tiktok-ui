import classNames from 'classnames/bind';
import { useContext } from 'react';
import Button from '~/components/Button';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import style from './Notification.module.scss';
import ProgressVideo from '~/components/loading/progressVidep';

const cx = classNames.bind(style);
function Notification({ closeNotification, value }) {
    const { currentUser } = useContext(ProviderServices);
    return (
        <div className={cx('wrapper')}>
            {value > 99 ? (
                <>
                    <h1 className={cx('title')}> Video của bạn đang được tải lên TikTok!</h1>
                    <div className={cx('container')}>
                        <Button onClick={closeNotification} primary content={'tải video khác'} />
                        <Button medium to={'/@' + currentUser.nickname + ''} content={'xem hồ sơ'} />
                    </div>
                </>
            ) : (
                <div className={cx('progress-video')}>
                    <ProgressVideo progressVideo={value} />
                    <p className={cx('progress-heading')}>dang tai video ...</p>
                </div>
            )}
        </div>
    );
}

export default Notification;

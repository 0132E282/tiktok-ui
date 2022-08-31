import classNames from 'classnames/bind';
import styles from './suggestedPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/Images';
import { IconCheckBlue } from '~/icon';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function SuggestedPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('image')} src={data.avatar} alt={data.title} />
                <Button primary medium content={'Following'} />
            </div>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h3 className={cx('title_nickname')}>{data.nickname} </h3>
                    {data.chick && (
                        <span>
                            <IconCheckBlue className={cx('blueTicks')} />
                        </span>
                    )}
                </div>
                <h4 className={cx('container_fullname')}>{data.first_name + ' ' + data.last_name}</h4>
                <div className={cx('container_interactive')}>
                    <div className={cx('interactive_item')}>
                        <span className={cx('interactive-item__quantity')}>{data.followings_count}</span> : Flowing
                    </div>
                    <div className={cx('interactive_item')}>
                        <span className={cx('interactive-item__quantity')}>{data.likes_count}</span> : Like
                    </div>
                </div>
            </div>
        </div>
    );
}
SuggestedPreview.propTypes = {
    value: PropTypes.object,
};
export default SuggestedPreview;

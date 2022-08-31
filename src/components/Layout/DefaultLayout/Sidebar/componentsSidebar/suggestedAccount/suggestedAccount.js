import styles from './suggestedAccount.module.scss';
import classNames from 'classnames/bind';
import ItemAccount from './accountItem';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function SuggestedAccount({ data = [], title, btnContentNext, onSeeAll }) {
    const ReaderAccountItem = () => {
        return data.map((value, index) => {
            return <ItemAccount key={index} data={value} />;
        });
    };
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>{title}</h3>
            <div className={cx('container')}>{ReaderAccountItem()}</div>
            <div className={cx('btn-show')} onClick={onSeeAll}>
                {btnContentNext}
            </div>
        </div>
    );
}
SuggestedAccount.prototype = {
    title: PropTypes.string.isRequired,
};
export default SuggestedAccount;

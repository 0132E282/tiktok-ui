import classNames from 'classnames/bind';
import styles from './suggestedAccount.module.scss';
import SuggestedPreview from './SuggestedPreview';

import PropStyle from 'prop-types';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/Images';
import { IconCheckBlue } from '~/icon';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);
function ItemAccount({ data }) {
    return (
        <>
            <Tippy
                interactive={true}
                delay={[500, 0]}
                placement={'bottom'}
                render={(attrs) => (
                    <div tabIndex={-1} className={cx('preview')} {...attrs}>
                        <PopperWrapper>
                            <SuggestedPreview data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('item-account')}>
                    <Image className={cx('item-account-image')} src={data.avatar} />
                    <div className={cx('item-account_container')}>
                        <div className={cx('item-account_title')}>
                            <h3 className={cx('container_nickname')}>{data.nickname} </h3>
                            {data.tick && (
                                <span>
                                    <IconCheckBlue className={cx('blueTicks')} />
                                </span>
                            )}
                        </div>
                        <h4 className={cx('container_fullname')}>{data.first_name + ' ' + data.last_name}</h4>
                    </div>
                </div>
            </Tippy>
        </>
    );
}
PropStyle.PropStyle = {
    value: PropStyle.object.isRequired,
};
export default ItemAccount;

/* eslint-disable react-hooks/exhaustive-deps */
import classnames from 'classnames/bind';
import { useEffect, useState, memo, useContext, Suspense } from 'react';

import styles from './Home.module.scss';
import * as videoServices from '~/Services/Api/videoServices';
import Button from '~/components/Button';
import { IconDow } from '~/icon';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import RecommendVideoItem from '~/components/RecommendVideo';
const cx = classnames.bind(styles);
function Home() {
    const { scrollValue, setScrollValue } = useContext(ProviderServices);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('video_Recommend')}>
                    <RecommendVideoItem />
                </div>
                <div className={cx('controller')}>
                    <Button className={cx('btn-download')} small content={'tải ứng dụng'} />
                    {scrollValue > 0 && (
                        <Button
                            className={cx('btn-dow')}
                            circle
                            icon={<IconDow />}
                            onClick={() => {
                                window.scrollTo(0, 0);
                                setScrollValue(0);
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
export default memo(Home);

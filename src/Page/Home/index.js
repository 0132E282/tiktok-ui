/* eslint-disable react-hooks/exhaustive-deps */
import classnames from 'classnames/bind';
import { useEffect, useState, memo, useCallback, useContext } from 'react';

import styles from './Home.module.scss';
import RecommendVideoItem from '~/components/RecommendVideo/RecommendVideoItem';
import * as videoServices from '~/Services/Api/videoServices';
import Button from '~/components/Button';
import { IconDow } from '~/icon';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
const cx = classnames.bind(styles);
function Home() {
    const { scrollValue, setScrollValue } = useContext(ProviderServices);
    const [videoList, setVideoList] = useState([]);
    const [pageVideo, setPageVideo] = useState(1);
    useEffect(() => {
        videoServices
            .getVideo({ page: pageVideo })
            .then((res) => {
                setVideoList((prev) => [...prev, ...res]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [pageVideo]);
    const renderVideo = useCallback(() => {
        return videoList.map((videoItem, index) => {
            return <RecommendVideoItem key={index} user={videoItem.user} video={videoItem} btnFollowing={true} />;
        });
    }, [videoList]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video_Recommend')}>{renderVideo()}</div>
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
    );
}
export default memo(Home);

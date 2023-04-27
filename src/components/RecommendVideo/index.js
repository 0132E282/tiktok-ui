import classnames from 'classnames/bind';
import { useState, lazy, useContext, useEffect, useRef, Suspense, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '~/config/routes';
import { useDebounce } from '~/hooks';
import style from './RecommendVideo.module.scss';
import * as videoApiServices from '~/Services/Api/videoServices';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
const RecommendVideoItem = lazy(() => import('./RecommendVideoItem'));
const cx = classnames.bind(style);
function VideoList() {
    const { token } = useContext(ProviderServices);
    const { scrollValue } = useContext(ProviderServices);
    const scrollDebounce = useDebounce(scrollValue, 400);
    const VideoListRef = useRef([]);
    const [listVideo, setListVideo] = useState([]);
    const [page, setPage] = useState(1);
    const location = useLocation();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        let videoActive = VideoListRef.current[0];
        if (scrollDebounce) {
            videoActive = VideoListRef.current.find((value, index, arr) => {
                return scrollDebounce - value.offsetTop < 300 && scrollDebounce - value.offsetTop > -150;
            });

            if ((scrollDebounce * 100) / VideoListRef.current[VideoListRef.current.length - 1]?.offsetTop > 95) {
                setPage(page + 1);
            }
        }
        const videoPlay = videoActive?.querySelector('video');
        videoPlay?.play();
        return () => {
            videoPlay?.pause();
        };
    }, [page, scrollDebounce, user]);
    useEffect(() => {
        const typeName = location.pathname === routes.following && token ? 'following' : 'for-you';
        videoApiServices
            .getVideo({ type: typeName, page, currentToKen: token })
            .then((res) => {
                setListVideo((prev) => [...prev, ...res]);
            })
            .catch((err) => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, token, location]);
    useEffect(() => {
        if (listVideo) {
            const videoListUpdate = listVideo.map((item, index) => {
                if (user.value.id === item.user.id) {
                    return { ...item, user: user.value };
                } else if (user.videoValue.id === item.id) {
                    return { ...user.videoValue };
                }
                return item;
            }, []);
            setListVideo([...videoListUpdate]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <div className={cx('rapper')}>
            {listVideo.map((videoItem, index) => {
                return (
                    <Suspense key={videoItem.id}>
                        <RecommendVideoItem
                            ref={(el) => (VideoListRef.current[index] = el)}
                            user={videoItem.user}
                            video={videoItem}
                        />
                    </Suspense>
                );
            })}
        </div>
    );
}

export default memo(VideoList);

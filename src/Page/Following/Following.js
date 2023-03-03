import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import * as userAipServices from '~/Services/Api/userServices';
import * as videoApiServices from '~/Services/Api/videoServices';
import UserNomination from './component/UserNomination/userNomination';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import RecommendVideoItem from '~/components/RecommendVideo/RecommendVideoItem';
import Video from '~/components/video/Video';
import { useRef } from 'react';
import { useContext } from 'react';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
const cx = classNames.bind(styles);
function Following() {
    const [suggested, setSuggested] = useState([]);
    const [listVideo, setListVideo] = useState([]);
    const [pageUserSuggested, setPageUserSuggested] = useState(1);
    const [pageVideoFollowing, setPageVideoFollowing] = useState(1);
    const { isLogin } = useSelector((state) => state.auth);
    const { token } = useContext(ProviderServices);
    useEffect(() => {
        userAipServices
            .getSuggested({ page: pageUserSuggested })
            .then((res) => {
                setSuggested([...res]);
            })
            .catch((err) => console.log(err));
    }, [pageUserSuggested]);
    useEffect(() => {
        if (token) {
            videoApiServices
                .getVideo({ type: 'following', page: pageVideoFollowing, currentToKen: token })
                .then((res) => setListVideo((prev) => [...prev, ...res]))
                .catch((err) => console.log(err));
        }
    }, [pageVideoFollowing, token]);
    return (
        <div className={cx('wrapper')}>
            {!isLogin ? (
                <div className={cx('user-nomination')}>
                    {suggested.map((user, index) => (
                        <UserNomination key={index} user={user} />
                    ))}
                </div>
            ) : (
                <div className={cx('recommend-video-following')}>
                    {listVideo.map((video, index) => {
                        return (
                            <RecommendVideoItem key={index} user={video.user} video={video} btnFollowing={false}>
                                <Video video_rul={video.url} />
                            </RecommendVideoItem>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Following;

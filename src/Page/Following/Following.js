import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import * as userAipServices from '~/Services/Api/userServices';
import UserNomination from './component/UserNomination/userNomination';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import VideoRecommend from '~/components/RecommendVideo';
const cx = classNames.bind(styles);
function Following() {
    const [suggested, setSuggested] = useState([]);
    const [pageUserSuggested, setPageUserSuggested] = useState(1);
    const { isLogin } = useSelector((state) => state.auth);
    useEffect(() => {
        if (!isLogin) {
            userAipServices
                .getSuggested({ page: pageUserSuggested })
                .then((res) => {
                    setSuggested([...res]);
                })
                .catch((err) => console.log(err));
        }
    }, [pageUserSuggested, isLogin]);

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
                    <VideoRecommend />
                </div>
            )}
        </div>
    );
}

export default Following;

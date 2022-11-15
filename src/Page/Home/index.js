/* eslint-disable react-hooks/exhaustive-deps */
import classnames from 'classnames/bind';
import {  useContext, useEffect,  useMemo,  useRef,  useState } from 'react';

import styles from './Home.module.scss';
import RecommendVideoItem from '~/components/RecommendVideo/RecommendVideoItem';
import * as videoServices from '~/Services/Api/videoServices';
import Video from '~/components/video';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import Button from '~/components/Button';
import { IconDow } from '~/icon';
import { memo } from 'react';
import { useDebounce } from '~/hooks';
const cx = classnames.bind(styles);
function Home() {
    const {playingVideo, setPlayingVideo } = useContext(ProviderServices);
    const [videoList , setVideoList] = useState([]);
    const [pageVideo , setPageVideo] = useState(1);
    const [scrollValue , setScrollValue] = useState(0);
    const debouncedScrollValue = useDebounce(scrollValue, 50);
    const homeRef = useRef()
    useEffect(()=>{
        videoServices.getVideo({  page : pageVideo})
        .then((res )=>{ setVideoList(prev => [...prev,...res])})
        .catch((err)=>{
            console.log(err);
        })
    } , [pageVideo]);
    useEffect(()=>{
        if(debouncedScrollValue >=  homeRef.current.offsetHeight - 900){
            setPageVideo(pageVideo + 1);
        }
        const video = Array.from(document.querySelectorAll('.recommend-video'));
        video.forEach((video)=>{
            if(video.offsetTop - debouncedScrollValue < 600 && video.offsetTop - debouncedScrollValue > -250){
                video.classList.add('playing');
                setPlayingVideo(document.querySelector(".playing"));
            }else{
                video.classList.remove('playing');
            }
        })
    },[debouncedScrollValue, setPlayingVideo])
    useEffect(()=>{
        if(scrollValue === 0){
            setPlayingVideo(document.querySelector('.recommend-video:first-child'));
            if(playingVideo !== undefined && playingVideo !== null){
                playingVideo.classList.add('playing');
            }
        }
        window.addEventListener('scroll',(e)=>{
            setScrollValue(window.scrollY);
        });
    });
    return (
        <div className={cx('wrapper')} ref={homeRef}>
            <div className={cx("video_Recommend")}>
                {videoList.map((videoItem , index)=>{
                    return <RecommendVideoItem key={index} user={videoItem.user} direction ={videoItem.description} likeCount={videoItem.likes_count} commentCount={videoItem.comments_count} sharesCount ={videoItem.shares_count}>
                        <Video id={videoItem.id} video_rul={videoItem.file_url}/>
                    </RecommendVideoItem>
                })}
            </div>
            <div className={cx('controller')}>
                <Button className={cx('btn-download')} small content={'tải ứng dụng'}/>
                {scrollValue > 0 &&  <Button className={cx("btn-dow")} circle icon={<IconDow/>} onClick={()=>{
                    window.scrollTo(0,0);
                    setScrollValue(0);
                }}/>}
            </div>
        </div>)}
export default memo(Home);

import classnames from 'classnames/bind';
import {  useContext, useEffect,  useRef,  useState } from 'react';

import styles from './Home.module.scss';
import DivContainer from '~/components/RecommendVideo/RecommendVideoItem';
import * as videoServices from '~/Services/Api/videoServices';
import Video from '~/components/video';
import VideoList from '~/components/RecommendVideo';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import Button from '~/components/Button';
import { IconDow } from '~/icon';
const cx = classnames.bind(styles);
function Home() {
    const {playingVideo, setPlayingVideo } = useContext(ProviderServices);
    const [videoList , setVideoList] = useState([]);
    const [pageVideo , setPageVideo] = useState(1);
    const [scrollValue , setScrollValue] = useState(0);
    const homeRef = useRef()
    useEffect(()=>{
        videoServices.getVideo({  page : pageVideo})
        .then((res )=>{ setVideoList(prev => [...prev,...res])})
        .catch((err)=>{
            console.log(err);
        })
    } , [pageVideo]);

    useEffect(()=>{
        const video = Array.from(document.querySelectorAll('.recommend-video'));
        if(scrollValue === 0){
            setPlayingVideo(document.querySelector('.recommend-video:first-child'));
            if(playingVideo !== undefined && playingVideo !== null){
                playingVideo.classList.add('playing');
            }
        }
        window.addEventListener('scroll',(e)=>{
            video.forEach((video)=>{
                if(video.offsetTop - scrollValue < 250 && video.offsetTop - scrollValue > -250){
                    video.classList.add('playing');
                    setPlayingVideo(document.querySelector(".playing"));
                    setScrollValue(window.scrollY);
                   return;
                }else{
                    video.classList.remove('playing');
                }
                
            })
            if(window.scrollY >= homeRef.current.offsetHeight - 800){
                setPageVideo(pageVideo + 1);
            }
        });
        
    });
    
    return (
        <div className={cx('wrapper')} ref={homeRef}>
            <VideoList>
                {videoList.map((videoItem , index)=>{
                    return <DivContainer key={index} user={videoItem.user} direction ={videoItem.description} likeCount={videoItem.likes_count} commentCount={videoItem.comments_count} sharesCount ={videoItem.shares_count}>
                        <Video id={videoItem.id} video_rul={videoItem.file_url}  />
                    </DivContainer>
                })}
            </VideoList>
            <div className={cx('controller')}>
                <Button className={cx('btn-download')} small content={'tải ứng dụng'}/>
                {scrollValue > 0 && <Button circle icon={<IconDow/>} onClick={()=>{
                    window.scrollTo(0,0);
                    setScrollValue(0);
                }}/>}
            </div>
        </div>
    )
}

export default Home;

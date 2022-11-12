import classnames from 'classnames/bind';
import styles from './Home.module.scss';
import DivContainer from '~/components/videoList/DivContainer';
import * as videoServices from '~/Services/Api/videoServices';
import { useContext, useEffect,  useRef,  useState } from 'react';
import Video from '~/components/video';
import VideoList from '~/components/videoList';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
const cx = classnames.bind(styles);
function Home() {
    const { setPlayingVideo } = useContext(ProviderServices);
    const [videoList , setVideoList] = useState([]);
    const [pageVideo , setPageVideo] = useState(1);
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
        window.addEventListener('scroll',(e)=>{
            video.forEach((video)=>{
                if(video.offsetTop - window.scrollY < 250 && video.offsetTop - window.scrollY > -250){
                    video.classList.add('playing');
                    setPlayingVideo(document.querySelector(".playing"))
                }else{
                    video.classList.remove('playing');
                }
                if(window.scrollY >= homeRef.current.offsetHeight - 800){
                    setPageVideo(pageVideo + 1);
                }
            })
        })
        setPlayingVideo(document.querySelector(".playing"));
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
            
        </div>
    )
}

export default Home;

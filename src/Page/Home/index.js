/* eslint-disable react-hooks/exhaustive-deps */
import classnames from 'classnames/bind';
import { useEffect,  useRef,  useState ,createRef} from 'react';

import styles from './Home.module.scss';
import RecommendVideoItem from '~/components/RecommendVideo/RecommendVideoItem';
import * as videoServices from '~/Services/Api/videoServices';
import Video from '~/components/video';
import Button from '~/components/Button';
import { IconDow } from '~/icon';
import { memo ,useCallback} from 'react';
import { useDebounce } from '~/hooks';
const cx = classnames.bind(styles);

function Home() {
    const [videoList , setVideoList] = useState([]);
    const [pageVideo , setPageVideo] = useState(1);
    const [scrollValue , setScrollValue] = useState(0);
    const videoListRef = useRef([]);
    const homePageRef = useRef();
    const scrollDebounce = useDebounce(scrollValue,200)
    useEffect(()=>{
        videoServices.getVideo({  page : pageVideo})
        .then((res )=>{ setVideoList(prev => [...prev,...res])})
        .catch((err)=>{
            console.log(err);
        })
    } , [pageVideo]);
    useEffect(()=>{
        const video = videoListRef.current.find(video  => 
            scrollDebounce - video.videoItem().offsetTop < 400 && scrollDebounce - video.videoItem().offsetTop > -250
        )
        if(video){
            video.videoItem().classList.add('playing');
            video.play();
        }
        
        return (()=>{
            if(video){
                video.videoItem().classList.remove('playing');
                video.pause();
            }
        })
    },[scrollDebounce]);
    useEffect(()=>{ 
        window.addEventListener('scroll',(e)=> {
            setScrollValue(window.scrollY)
            const height = (window.scrollY / homePageRef.current.offsetHeight) * 100;
            if(height > 80 ){
                setPageVideo(pageVideo + 1 );
             }
        });
        return(()=>{
            window.removeEventListener('scroll',(e)=>setScrollValue(window.scrollY));
        })
     },[]);
    const renderVideo = useCallback(()=>{
       return videoList.map((videoItem , index)=>{
        return <RecommendVideoItem key={index} dataIndex={index} user={videoItem.user} video={videoItem}>
            <Video ref={el => videoListRef.current[index] = el} id={videoItem.id} video_rul={videoItem.file_url}/>
        </RecommendVideoItem>})
    },[videoList]);

    return (<div className={cx('wrapper')} ref={homePageRef}>
            <div className={cx("video_Recommend")}>
                {renderVideo()}
            </div>
            <div className={cx('controller')}>
                <Button className={cx('btn-download')} small content={'tải ứng dụng'}/>
                {scrollValue > 0 &&  <Button className={cx("btn-dow")} circle icon={<IconDow/>} onClick={()=>{
                    window.scrollTo(0,0);
                    setScrollValue(0);
                }}/>}
            </div>
        </div>
    )}
export default memo(Home);

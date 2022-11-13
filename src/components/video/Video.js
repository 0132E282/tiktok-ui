import classnames from "classnames/bind";
import { useCallback,  useContext,  useEffect, useMemo, useRef , useState ,} from "react";

import style from './Video.module.scss';
import {IconVolume ,IconPause ,IconPlay , IconMuted,  } from "~/icon";
import video from "~/assets/video";
import Button from "../Button";
import { ProviderServices } from "~/Services/provider/ProviderGlobal";
const cx = classnames.bind(style);
function Video({id, video_rul }) {
    const mutedRef = useRef();
    const videoRef = useRef();
    const timeLine = useRef();
    const seekBarRef = useRef();
    const [isMutedVideo, setMutedVideo] = useState(false);
    const [isPlayVideo ,setPlayVideo] = useState(false);
    const [TimeSeekBar, setTimeSeekBar] = useState(0);
    const [valueVolume , setValueVolume] = useState(100);
    const [durationVideo, setDurationVideo] = useState(0);
    const [isSeekbar , setIsSeekBar] = useState(true);
    const [historyVideo, setHistoryVideo] = useState((res)=>res)
    const {playingVideo } = useContext(ProviderServices);
    const handleUpdateSeekBar = (e) => {
      if(e.target.duration && isPlayVideo ){
        if(timeLine.current){
            const time = (100 / e.target.duration) * e.target.currentTime;
            timeLine.current.style.width = (time + "%");
        }
      setTimeSeekBar(e.target.currentTime);
       e.target.loop =true;
     }
   };
   const handleOnclickVideo = e =>{
      if(!isPlayVideo){
        videoRef.current.play();
      }else{
        videoRef.current.pause();
      }
   }
   const timeVideo =  (time)=> {
    let minute = Math.floor(time / 60);
    let seconds = time % 60;
    return (
        <span>{ minute > 0 && minute + ':'} {Math.floor(seconds) < 10 ? `0${Math.floor(seconds)}`:Math.floor(seconds)} </span>
    ); 
   }
   
    useEffect(()=>{
       if(playingVideo !== undefined && playingVideo !== null){
            const video = playingVideo.querySelector('video');
            if(playingVideo.classList.contains('playing')){
                if(historyVideo !== undefined &&historyVideo !== null){
                  historyVideo.pause();
                }
                video.play();
                setHistoryVideo(video);
            }
       }
    },[playingVideo,historyVideo]);
    return (<div className={cx("video-wrapper")}>
    <div className={cx("video-wrapper__container")} >
      <video ref={videoRef} src={video_rul ||video.videoDefaults } 
        onPlaying={(e)=>{
          setDurationVideo(e.target.duration);
          setPlayVideo(true);
        }}
        onCanPlay={()=>{
          const video = playingVideo.querySelector('video');
          video.play();
          setHistoryVideo(video);
        }}
        onPause={()=>{
          setPlayVideo(false);
          setDurationVideo(0);
        }}
        onTimeUpdate= {handleUpdateSeekBar}
        loop ={true} >
      </video>
      <div className={cx("video__container--controller")}>
         <div className={cx("controller__button")}>
            <div className={cx("btn-video")}>
              <Button className={cx("btn__play-pause")} icon={ isPlayVideo ? <IconPlay/> :<IconPause/> } onClick={handleOnclickVideo}/>
            </div>
            <div ref = {mutedRef} className={cx("video-volume",{"dis-block " : isMutedVideo})}>
                <Button icon={ isMutedVideo ?  <IconMuted/> : <IconVolume/> }  className={cx("m-0","btn-isMuted")} onClick ={e => {
                  videoRef.current.muted = !isMutedVideo;
                  setMutedVideo(!isMutedVideo);
                }}/>
                <div className={cx("video-volume__controller")}>
                  <input type={'range'}   className={cx("input__controller--range")}  max = {isMutedVideo ? 0 : 100} value={valueVolume} onInput={e=> {
                      // take the current value volume
                      videoRef.current.volume = valueVolume / 100 ;
                      setValueVolume(e.target.value);
                      e.target.value  < 1 ?   setMutedVideo(true) : setMutedVideo(false);
                     }}
                  />
                </div>
            </div>
         </div>
         <div className={cx("controller__seekBar" )}>
           { durationVideo > 60 && isSeekbar && <>
              <div className={cx("seekBar-range")}>
                <span ref={timeLine}></span>
                <input  type={'range'} ref={seekBarRef} value={((100 / durationVideo ) * TimeSeekBar ) || TimeSeekBar } max={100} onChange={e => {
                    const time = videoRef.current.duration * (e.target.value / 100);
                    videoRef.current.currentTime = time;
                    setTimeSeekBar(time);
                    timeLine.current.style.width = e.target.value + "%" ;
                }}
              />
            </div>
            <div className={cx("seekBar__duration")}>
                {timeVideo(TimeSeekBar)}/ {timeVideo(durationVideo)}
            </div>
           </>}
         </div>
      </div>
    </div>
</div>);
}

export default Video;
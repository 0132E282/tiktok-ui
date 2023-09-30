import classnames from 'classnames/bind';
import { useRef, useState, useContext } from 'react';

import style from './Video.module.scss';
import { IconVolume, IconPause, IconPlay, IconMuted } from '~/icon';
import Button from '../Button';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
const cx = classnames.bind(style);
function Video({ video_url, className, onClick ,autoPalyVideo}) {
    const mutedRef = useRef();
    const videoRef = useRef();
    const timeLine = useRef();
    const seekBarRef = useRef();
    const [isPlayVideo, setPlayVideo] = useState(false);
    const [TimeSeekBar, setTimeSeekBar] = useState(0);
    const [durationVideo, setDurationVideo] = useState(0);
    const [isSeekbar, setIsSeekBar] = useState(true);
    const { isMutedVideo, setMutedVideo, valueVolume, setValueVolume, historyPlaying, setHistoryPlaying } = useContext(
        ProviderServices,
    );
    const handleUpdateSeekBar = (e) => {
        if (e.target.duration && isPlayVideo) {
            if (timeLine.current) {
                const time = (100 / e.target.duration) * e.target.currentTime;
                timeLine.current.style.width = time + '%';
            }
            videoRef.current.volume = valueVolume / 100;
            setTimeSeekBar(e.target.currentTime);
        }
    };
    const timeVideo = (time) => {
        let minute = Math.floor(time / 60);
        let seconds = time % 60;
        return (
            <span>
                {minute > 0 && minute + ':'}{' '}
                {Math.floor(seconds) < 10 ? `0${Math.floor(seconds)}` : Math.floor(seconds)}{' '}
            </span>
        );
    };
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('video-wrapper__container')}>
                <video
                    ref={videoRef}
                    onPlaying={(e) => {
                        setDurationVideo(e.target.duration);
                        setPlayVideo(true);
                    }}
                    onPause={() => {
                        setPlayVideo(false);
                        setDurationVideo(0);
                    }}
                    onClick={onClick}
                    onTimeUpdate={handleUpdateSeekBar}
                    muted={isMutedVideo}
                    autoPlay={autoPalyVideo}
                    loop
                >
                     <source src={video_url} type="video/mp4" />
                </video>
                <div className={cx('video__container--controller')}>
                    <div className={cx('controller__button')}>
                        <div className={cx('btn-video')}>
                            <Button
                                type={'button'}
                                className={cx('btn__play-pause')}
                                icon={isPlayVideo ? <IconPlay /> : <IconPause />}
                                onClick={() => {
                                    if (!isPlayVideo) {
                                        if (historyPlaying) {
                                            historyPlaying.pause();
                                        }
                                        
                                        videoRef.current.play();
                                        console.log(videoRef.current)
                                        setHistoryPlaying(videoRef.current);
                                    } else {
                                        videoRef.current.pause();
                                       
                                    }
                                }}
                            />
                        </div>
                        <div ref={mutedRef} className={cx('video-volume', { 'dis-block ': isMutedVideo })}>
                            <Button
                                icon={isMutedVideo ? <IconMuted /> : <IconVolume />}
                                className={cx('m-0', 'btn-isMuted')}
                                onClick={() => {
                                    setMutedVideo(!isMutedVideo);
                                    setValueVolume(!isMutedVideo ? 0 : 100);
                                }}
                            />
                            <div className={cx('video-volume__controller')}>
                                <input
                                    type={'range'}
                                    className={cx('input__controller--range')}
                                    value={valueVolume}
                                    max={100}
                                    onInput={(e) => {
                                        setValueVolume(e.target.value);
                                        e.target.value < 1 ? setMutedVideo(true) : setMutedVideo(false);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('controller__seekBar')}>
                        {durationVideo > 60 && isSeekbar && (
                            <>
                                <div className={cx('seekBar-range')}>
                                    <span ref={timeLine}></span>
                                    <input
                                        type={'range'}
                                        ref={seekBarRef}
                                        value={(100 / durationVideo) * TimeSeekBar || TimeSeekBar}
                                        max={100}
                                        onChange={(e) => {
                                            const time = videoRef.current.duration * (e.target.value / 100);
                                            videoRef.current.currentTime = time;
                                            setTimeSeekBar(time);
                                            timeLine.current.style.width = e.target.value + '%';
                                        }}
                                    />
                                </div>
                                <div className={cx('seekBar__duration')}>
                                    {timeVideo(TimeSeekBar)}/ {timeVideo(durationVideo)}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;

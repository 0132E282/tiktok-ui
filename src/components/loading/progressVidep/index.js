import classNames from 'classnames/bind';
import { useState } from 'react';
import { memo, useRef } from 'react';
import { useEffect } from 'react';
import style from './ProgressVideo.module.scss';
const cx = classNames.bind(style);
function ProgressVideo({ file, onLoaded, progressVideo }) {
    const [valueProgress, setValueProgress] = useState(0);
    const refCircle = useRef();
    useEffect(() => {
        const jaxa = new XMLHttpRequest();
        const data = new FormData();
        if (file) {
            data.append('file ', file);
            jaxa.upload.addEventListener('progress', (e) => {
                const precntComplete = (e.loaded / e.total) * 100;
                setValueProgress(precntComplete);
            });
            jaxa.upload.addEventListener('loadend', onLoaded);
            jaxa.open('POST', 'fakeur');
            jaxa.send(data);
        }
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('loading_video')}>{valueProgress || progressVideo} %</div>
                <svg
                    className={cx('loading-circle')}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="80px"
                    viewBox="0 0 80 80"
                    height="80px"
                >
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#e91e63" />
                            <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle
                        ref={refCircle}
                        cx="40"
                        cy="40"
                        r="36"
                        strokeDashoffset={230 - (progressVideo / 100) * 230}
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
}

export default memo(ProgressVideo);

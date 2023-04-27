import classnames from 'classnames/bind';

import style from './Upload.module.scss';

import Button from '~/components/Button';
import { useRef, useState, useEffect, useContext, useReducer } from 'react';
import { IconUpload } from '~/icon';

import Video from '~/components/video/Video';
import useGetUrl from '~/hooks/useGetUrl';
import { IconAt, IconChecked, IconClose, IconDivideBlack, IconHashtag, IconSearch } from '~/icon';
import { useForm } from 'react-hook-form';
import * as videoApiServices from '~/Services/Api/videoServices';
import { ProviderServices } from '~/Services/provider/ProviderGlobal';
import Modal from '~/components/modal/Modal';
import Notification from './components/Notification';
import { generateVideoThumbnails } from '@rajesh896/video-thumbnails-generator';
import ProgressVideo from '~/components/loading/progressVidep';
import Image from '~/Images';
const CHECK_BOX_LICENSE = [
    {
        title: 'Bình luận',
        value: 'comment',
    },
    {
        title: 'Stitch',
        value: 'Stitch',
    },
    {
        title: 'Duet',
        value: 'Duet',
    },
];
const cx = classnames.bind(style);
const actionTypeVideo = {
    UPLOAD_VIDEO: 'UPLOAD_VIDEO',
};
function Upload() {
    const inputNoteRef = useRef();
    const sliderThumbRef = useRef();
    const videoThumbnail = useRef();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [videoUpload, setVideoUpload] = useState(undefined);
    const CheckBOxList = useRef();
    const urlVideo = useGetUrl(videoUpload);
    const [valueNote, setValueNote] = useState('');
    const [tagUserFollow, setTagUserFollow] = useState(false);
    const [thumbnailTimeList, setThumbnailItemList] = useState([]);
    const [progress, setProgress] = useState(0);
    const thumbnailRef = useRef();
    const { token } = useContext(ProviderServices);
    const reduxUploadVideo = (state, action) => {
        switch (action.type) {
            case 'UPLOAD_VIDEO':
                const data = {
                    upload_file: action.payload.video,
                    description: action.payload.description,
                    viewable: action.payload.viewable,
                    allows: action.payload.allows,
                    thumbnail_time: Math.floor(action.payload.thumbnail_time),
                };
                videoApiServices
                    .postUploadVideo(token, {
                        data,
                        onUploadProgress(progressEvent) {
                            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                            setProgress(percentCompleted);
                        },
                    })
                    .then((res) => {})
                    .catch((err) => console.log(err));
                break;
            default:
                console.log(1);
        }
    };
    const [video, dispatchVideo] = useReducer(reduxUploadVideo, {});
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        generateVideoThumbnails(videoUpload, 7, 'images')
            .then((value) => {
                setThumbnailItemList([...value]);
            })
            .catch((err) => console.log(err));
    }, [videoUpload]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('upload')}>
                <div className={cx('header')}>
                    <h1 className={cx('title')}>Tải video lên</h1>
                    <h2 className={cx('description')}>Đăng video vào tài khoản của bạn</h2>
                </div>
                <form
                    className={cx('upload-container')}
                    onSubmit={handleSubmit((data) => {
                        setIsOpenModal(true);
                        dispatchVideo({
                            type: actionTypeVideo.UPLOAD_VIDEO,
                            payload: {
                                ...data,
                                video: videoUpload,
                                thumbnail_time: videoThumbnail.current.currentTime,
                            },
                        });
                    })}
                >
                    <div className={cx('video-upload')}>
                        <div className={cx('wrapper')}>
                            {!videoUpload && !progress ? (
                                <div
                                    className={cx('input-file')}
                                    onClick={() => {
                                        document.querySelector('input[type="file"]').click();
                                    }}
                                >
                                    {!progress ? (
                                        <>
                                            <span>
                                                <IconUpload />
                                            </span>
                                            <div className={cx('content')}>
                                                <h1 className={cx('title')}>Chọn video để tải lên</h1>
                                                <p className={cx('description')}>Hoặc kéo và thả tập tin</p>
                                                <span>MP4 hoặc WebM</span>
                                                <span>Độ phân giải 720x1280 trở lên</span>
                                                <span>Tối đa 30 phút</span>
                                                <span>Nhỏ hơn 2 GB</span>
                                            </div>
                                            <Button
                                                type={'button'}
                                                primary
                                                className={cx('btn-upload')}
                                                content={'Chọn tập tin'}
                                            />
                                        </>
                                    ) : (
                                        <ProgressVideo
                                            file={videoUpload}
                                            onLoaded={() => {
                                                setProgress(true);
                                            }}
                                        />
                                    )}
                                </div>
                            ) : (
                                <>
                                    <div className={cx('demo-video')}>
                                        <div className={cx('demo-container')}>
                                            <Video src={urlVideo} accept="video/*" />
                                        </div>
                                    </div>
                                    <div className={cx('change-video')}>
                                        <span>{videoUpload?.name}</span>
                                        <button
                                            className={cx('btn-change-video')}
                                            onClick={() => {
                                                document.querySelector('input[type="file"]').click();
                                            }}
                                        >
                                            Thay đổi video
                                        </button>
                                    </div>
                                </>
                            )}
                            <input
                                type={'file'}
                                accept={'video/*'}
                                onChange={(e) => {
                                    if (e.target.files[0].type === 'video/mp4') setVideoUpload(e.target.files[0]);
                                }}
                                onInput={(e) => {
                                    setProgress(true);
                                }}
                            />
                        </div>
                    </div>
                    <div className={cx('setting')}>
                        <div className={cx('wrapper')}>
                            <div className={cx('editor-entrance')}>
                                <span className={cx('icon')}>
                                    <IconDivideBlack width={'2.2rem'} height={'1.8rem'} />
                                </span>
                                <div className={cx('content')}>
                                    <h1>Chia video và chỉnh sửa</h1>
                                    <p>
                                        Bạn có thể nhanh chóng phân chia video thành nhiều phần, loại bỏ các phần thừa
                                        và chuyển video ngang thành video dọc
                                    </p>
                                </div>
                                <Button
                                    primary
                                    content={'Chỉnh sửa'}
                                    className={cx('btn-editor')}
                                    onClick={(e) => {
                                        alert('đang trong giai đoạn phát triển');
                                    }}
                                />
                            </div>
                            <div className={cx('setting-item')}>
                                <div className={cx('content')}>
                                    <h1 className={cx('title')}>{tagUserFollow ? '@Bạn bè' : 'chú thích'}</h1>
                                    <span>{valueNote.length}/150</span>
                                </div>
                                <div className={cx('input', { err: errors.description })}>
                                    {tagUserFollow && (
                                        <span className={cx('btn-search')}>
                                            <IconSearch width={'2.4rem'} height={'2.4rem'} />
                                        </span>
                                    )}
                                    <input
                                        ref={inputNoteRef}
                                        {...register('description', { required: 'vui long nhap' })}
                                        type={'text'}
                                        defaultValue={valueNote}
                                        onChange={(e) => {
                                            setValueNote(e.target.value);
                                        }}
                                    />

                                    <div className={cx('action')}>
                                        {!tagUserFollow ? (
                                            <>
                                                <span
                                                    className={cx('action_icon-item')}
                                                    onClick={(e) => {
                                                        setValueNote(valueNote + '@');
                                                        inputNoteRef.current.focus();
                                                        setTagUserFollow(true);
                                                    }}
                                                >
                                                    <IconAt />
                                                </span>
                                                <span
                                                    className={cx('action_icon-item')}
                                                    onClick={(e) => {
                                                        setValueNote(valueNote + '#');
                                                    }}
                                                >
                                                    <IconHashtag />
                                                </span>
                                            </>
                                        ) : (
                                            <span
                                                className={cx('btn-close')}
                                                onClick={(e) => {
                                                    setTagUserFollow(false);
                                                }}
                                            >
                                                <IconClose width={'2.6rem'} height={'2.6rem'} />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('setting-item')}>
                                <div className={cx('content')}>
                                    <h1 className={cx('title')}>Ảnh bìa</h1>
                                </div>
                                <div className={cx('input')}>
                                    <div className={cx('thumbnail')} data-value={100}>
                                        <div className={cx('image-list')} re={thumbnailRef}>
                                            {thumbnailTimeList.map((image, index) => {
                                                return <Image key={index} src={image} />;
                                            })}
                                        </div>
                                        {videoUpload && thumbnailTimeList ? (
                                            <div className={cx('thumbnail-line')}>
                                                <div className={cx('range-slider')}>
                                                    <input
                                                        type={'range'}
                                                        defaultValue={0}
                                                        max-value={100}
                                                        className={cx('range')}
                                                        onInput={(e) => {
                                                            const maxValue = e.currentTarget.getAttribute('max-value');
                                                            const vl = (e.currentTarget.value / maxValue) * 100;
                                                            sliderThumbRef.current.style.left = vl + '%';
                                                            const time =
                                                                videoThumbnail.current.duration *
                                                                (e.target.value / 100);
                                                            videoThumbnail.current.currentTime = time;
                                                        }}
                                                    />
                                                    <div className={cx('slider-thumb')} ref={sliderThumbRef}>
                                                        <video
                                                            src={thumbnailTimeList.length > 0 && urlVideo}
                                                            ref={videoThumbnail}
                                                        ></video>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={cx('empty')}></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('setting-item')}>
                                <div className={cx('content')}>
                                    <h1 className={cx('title')}>Ai có thể xem video này</h1>
                                </div>
                                <select className={cx('status-video')} {...register('viewable')}>
                                    <option value={'public'} checked>
                                        công khai
                                    </option>
                                    <option value={'1'}>bạn bè</option>
                                    <option value={'3'}>riêng tư</option>
                                </select>
                            </div>
                            <div className={cx('setting-item')}>
                                <div className={cx('content')}>
                                    <h1 className={cx('title')}>Ai có thể xem video này</h1>
                                </div>
                                <div className={cx('checkBox-lits')}>
                                    {CHECK_BOX_LICENSE.map((data, index) => {
                                        return (
                                            <label key={index} className={cx('checkBox-item')}>
                                                <div className={cx('checkBox')}>
                                                    <input
                                                        ref={(req) => (CheckBOxList.current[index] = req)}
                                                        type={'checkbox'}
                                                        defaultValue={data.value}
                                                        {...register('allows')}
                                                    ></input>
                                                    <span className={cx('icon-checked')}>
                                                        <IconChecked />
                                                    </span>
                                                </div>
                                                {data.title}
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={cx('action')}>
                            <Button medium content={'hủy bỏ'} />
                            <Button type={'submit'} primary content={'Đăng'} />
                        </div>
                    </div>
                </form>
            </div>
            <Modal isOpen={isOpenModal}>
                <Notification
                    closeNotification={() => {
                        setIsOpenModal(false);
                    }}
                    value={progress}
                />
            </Modal>
        </div>
    );
}

export default Upload;

import classnames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { memo, useContext, useEffect, useState } from 'react';

import Button from '~/components/Button';
import { IconClose } from '~/icon';
import Image from '~/Images';

import style from './UpdateProFile.module.scss';
import { authAction } from '~/reduxSage/authSage/authSilce';
import useGetUrl from '~/hooks/useGetUrl';
const cx = classnames.bind(style);
function UpdateProFileMe({ handleOnClickClose }) {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { currentUser } = useSelector((state) => state.auth);
    const [nickname, setNickName] = useState(currentUser.nickname);
    const [selectedFile, setSelectedFile] = useState();
    const [lengthDescription, setLengthDescription] = useState(currentUser.bio.length);
    const UrlImages = useGetUrl(selectedFile, currentUser.avatar);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h1 className={cx('title')}>sử hồ sơ</h1>
                <Button
                    className={cx('btn-close')}
                    iconLeft={<IconClose width="2.4rem" height="2.4rem" />}
                    onClick={handleOnClickClose}
                />
            </header>
            <div className={cx('container')}>
                <form
                    className={cx('form')}
                    onSubmit={handleSubmit((data) => {
                        dispatch(
                            authAction.upload({
                                ...data,
                                avatar: data.avatar[0],
                            }),
                        );
                    })}
                >
                    <div className={cx('styled-item-container')}>
                        <h1 className={cx('title')}>Ảnh hồ sơ </h1>
                        <div className={cx('input-avatar')}>
                            <Image src={UrlImages} />
                            <input
                                type={'file'}
                                // can not load file with redux
                                {...register('avatar')}
                                className={cx('input-file-avatar')}
                                onChange={(e) => {
                                    setSelectedFile(e.target.files[0]);
                                }}
                            />
                        </div>
                        <div></div>
                    </div>
                    <div className={cx('styled-item-container')}>
                        <h1 className={cx('title')}>Ảnh hồ sơ </h1>
                        <div className={cx('input')}>
                            <input
                                defaultValue={currentUser.nickname}
                                {...register('nickname')}
                                placeholder={'TikTok ID'}
                                onInput={(e) => {
                                    setNickName(e.target.value);
                                }}
                            />
                            <div className={cx('description')}>
                                <p className={cx('edit-profile-username-link')}>www.tiktok.com/@{nickname}</p>
                                <p className={cx('edit-profile-username-tip')}>
                                    TikTok ID chỉ có thể bao gồm chữ cái, chữ số, dấu gạch dưới và dấu chấm. Khi thay
                                    đổi TikTok ID, liên kết hồ sơ của bạn cũng sẽ thay đổi.
                                </p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className={cx('styled-item-container')}>
                        <h1 className={cx('title')}>Ảnh hồ sơ </h1>
                        <div className={cx('input')}>
                            <div className={cx('input-name')}>
                                <input
                                    placeholder={'first_name'}
                                    {...register('first_name')}
                                    defaultValue={currentUser.first_name}
                                />
                                <input
                                    placeholder={'Last-name'}
                                    {...register('last_name')}
                                    defaultValue={currentUser.last_name}
                                />
                            </div>
                            <div className={cx('description')}>
                                <p>Bạn chỉ có thể thay đổi biệt danh 7 ngày một lần.</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className={cx('styled-item-container')}>
                        <h1 className={cx('title')}>Ảnh hồ sơ </h1>
                        <div className={cx('input')}>
                            <textarea
                                className={cx('style-input-textarea')}
                                placeholder="tiểu sử"
                                {...register('bio')}
                                defaultValue={currentUser.bio}
                                onChange={(e) => {
                                    setLengthDescription(e.target.value.length);
                                }}
                            ></textarea>
                            <span className={cx('text-count')}>{lengthDescription}/80</span>
                        </div>
                        <div></div>
                    </div>
                    <div className={cx('action')}>
                        <Button medium onClick={handleOnClickClose} content={'hủy'} />
                        <Button type="submit" primary content={'lưu'} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default memo(UpdateProFileMe);

import classNames from 'classnames/bind';
import { forwardRef, memo } from 'react';
import style from './comment.module.scss';

import { IconAt } from '~/icon';
import { useForm } from 'react-hook-form';
const cx = classNames.bind(style);
const isWhiteSpace = /^\s/;
function Comment({ children, onSubmit }, ref) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{children}</div>
            <div className={cx('input-comment-container')}>
                <form ref={ref} className={cx('form-comment')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('input-comment')}>
                        <textarea
                            placeholder={'thêm bình luận'}
                            {...register('text_comment')}
                            onInput={(e) => {
                                if (isWhiteSpace.test(e.target.value)) {
                                    e.target.value = '';
                                }
                                e.currentTarget.style.height = '40px';
                                const crHeight = e.target.scrollHeight;
                                e.currentTarget.style.height = crHeight + 'px';
                            }}
                        ></textarea>
                        <button className={cx('btn-action-comment')}>
                            <IconAt width="2.2rem" height="2.2rem" />
                        </button>
                        <button className={cx('btn-action-comment')}>
                            <IconAt width="2.2rem" height="2.2rem" />
                        </button>
                    </div>
                    <button className={cx('btn-submit-comment')}>đăng</button>
                </form>
            </div>
        </div>
    );
}

export default memo(forwardRef(Comment));

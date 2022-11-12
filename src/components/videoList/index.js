import classnames from "classnames/bind";
import style from './DivContainer.module.scss';
const cx = classnames.bind(style);
function VideoList({children}) {
    return ( <div className={cx('rapper')}>
      {children}
    </div>);
}

export default VideoList;
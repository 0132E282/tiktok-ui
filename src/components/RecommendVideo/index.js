import classnames from "classnames/bind";
import style from './RecommendVideoItem';
const cx = classnames.bind(style);
function VideoList({children}) {
    return ( <div className={cx('rapper')}>
      {children}
    </div>);
}

export default VideoList;
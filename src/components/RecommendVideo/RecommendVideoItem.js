import classnames from "classnames/bind";
import { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";

import style from './RecommendVideo.module.scss';
import routes from "~/config/routes";
import { IconCheckBlue,IconComment,IconSend,IconFacebook,IconLike,IconTwitter,  IconLink,  IconShare, IconInstagram} from "~/icon";
import Image from '~/Images';
import Button from "../Button";
import Modal from "../modal";
import MethodLoginModal from "../modal/ListMenuItem/methodLogin/MethodLogin";
import { ProviderServices } from "~/Services/provider/ProviderGlobal";
import Menu from "../Popper/Menu";
const LIST_METHOD_SHARE = [
   {
      icon : <IconLink/>,
      title : 'nhúng'
   },
   {
      icon : <IconSend/>,
      title : 'gữi cho bạn bè'
   },
   {
      icon : <IconFacebook width={'2.6rem'} height={'2.6rem'} />,
      title : 'Chia sẻ với Facebook'
   },
   {
      icon : <IconTwitter width={'2.6rem'} height={'2.6rem'}/>,
      title : 'Chia sẻ với Twitter'
   },
   {
      icon : <IconInstagram width={'2.6rem'} height={'2.6rem'} />,
      title : 'Chia sẻ với Instagram'
   }
]

const cx = classnames.bind(style);
function RecommendVideoItem({ children , user ,video}) {
   const [isLike , setIsLike ] = useState(false);
   const [isModal,setIsModal] = useState(false);
   const {isLogin } = useContext(ProviderServices);
    return (<div className={cx("wrapper","recommend-video")}>
       <Image className={cx("avatar avatar-m")} src={user.avatar} />
       <div className={cx("container")}>
         <div className={cx('info-user')}>
               <div className={cx("info-user__author")}>
                  <Link to={routes.following} className={cx("info-user__author-link")}>
                     <h3 className={cx("author-link__nickname")}>                   
                           {user.nickname}
                     </h3>
                     <IconCheckBlue className={cx("author-link__check-blue")}/>
                     <span className={cx("author-link__fullName")}>
                           {user.first_name + " " + user.last_name}
                     </span>
                  </Link>
               </div>
               <p className={cx("info-user__description")}>
                 {video.direction}
               </p>
               <a href="/#" className={cx("video-music")}>
                  nhạc nền - LE QUYEN
               </a>
         </div>
         <div className={cx('body')}>
            <div className={cx("video")}>
               {children}
            </div>
            <div className={cx("video-wrapper__action")}>
               <div className={cx("video-wrapper__action-list")}>
                  <div className={cx("action-list_item")}>
                     <div className={cx("action-list_item--icon")}>
                        <Button  icon={<IconLike className={cx({'like' : isLike})}/>} onClick={e => {
                           isLike ? setIsLike(false) : setIsLike(true);
                        }}/> 
                     </div> 
                     <p className={cx('action-list_item--text')}>{video.likeCount}</p>
                  </div>
                  <div className={cx("action-list_item")}> 
                     <div className={cx("action-list_item--icon")}> 
                        <Link to={"/"}><IconComment  className={cx("link")}/></Link>
                     </div>
                     <p className={cx('action-list_item--text')}>{video.commentCount}</p>
                  </div>
                  <div className={cx("action-list_item")}> 
                     <Menu className={cx('menu_method-share')} placement={'top-start'} menuItem={LIST_METHOD_SHARE}  hideOnClick={true}>
                        <div className={cx("action-list_item--icon")}> 
                           <IconShare/>
                        </div>
                     </Menu>
                     <p className={cx('action-list_item--text')}>{video.sharesCount}</p>
                  </div>
               </div>
            </div>
         </div>
       </div>
       <Button small  className={cx('btn-follow')} content={'Follow'} onClick={(e)=>{
         if(!isLogin){
            setIsModal(true);
         }
       }}/>
      
       <Modal isOpen={isModal }>
            <MethodLoginModal onClick={()=>{setIsModal(false);}} />
       </Modal>
    </div> );
}

export default memo(RecommendVideoItem);
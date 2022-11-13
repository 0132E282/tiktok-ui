import classnames from "classnames/bind";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import style from './RecommendVideo.module.scss';
import routes from "~/config/routes";
import { IconCheckBlue,IconComment,IconLike,  IconShare} from "~/icon";
import Image from '~/Images';
import Button from "../Button";
import Modal from "../modal";
import MethodLoginModal from "../modal/ListMenuItem/methodLogin/MethodLogin";
import { ProviderServices } from "~/Services/provider/ProviderGlobal";
const cx = classnames.bind(style);
function DivContainer({ children , user , direction ,  likeCount , commentCount ,sharesCount}) {
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
                 {direction}
               </p>
               <a href="/#" className={cx("video-music")}>
               <span className={cx("video-music__icon")}>
                  <i class="fas fa-music"></i>
               </span>
                  nhạc nền - LE QUYEN
               </a>
         </div>
         <div className={cx('body')}>
            <div className={cx("video")}>
               {children}
            </div>
            <div className={cx("video-wrapper__action")}>
               <ul className={cx("video-wrapper__action-list")}>
               <li className={cx("action-list_item")}>
                  <div className={cx("action-list_item--icon")}>
                     <Button  icon={<IconLike className={cx({'like' : isLike})}/>} onClick={e => {
                     isLike ? setIsLike(false) : setIsLike(true);
                     }}/> 
                  </div> 
                  <p className={cx('action-list_item--text')}>{likeCount}</p>
               </li>
               <li className={cx("action-list_item")}> 
                  <div className={cx("action-list_item--icon")}> 
                     <Link to={"/"}><IconComment  className={cx("link")}/></Link>
                  </div>
                  <p className={cx('action-list_item--text')}>{commentCount}</p>
               </li>
               <li className={cx("action-list_item")}> 
                  <div className={cx("action-list_item--icon")}> 
                     <IconShare/>
                  </div>
                  <p className={cx('action-list_item--text')}>{sharesCount}</p>
               </li>
               </ul>
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

export default DivContainer;
import classNames from "classnames/bind";

import Image from "~/Images";
import Button from "~/components/Button";
import { IconCheckBlue } from "~/icon";
import styles from './UserNomination.module.scss';
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "~/components/modal/Modal";
import MethodLoginModal from "~/components/modal/ListMenuItem/methodLogin/MethodLogin";
import { useContext } from "react";
const cx = classNames.bind(styles);
function UserNomination({user}) {
    const [isPlaying,setIsPlaying] = useState(false);
    const [isModal , setIsModal] = useState(false);
    return ( <>
        <div className={cx('wrapper')} onMouseMove={()=>{setIsPlaying(true)}} onMouseOut={(e)=>{setIsPlaying(false)}}>
            <Link to={`@/${user.nickname}`} onClick={(e)=>{
                e.target.closest('button') && e.preventDefault();
                }}>
                <Image src={user.popular_video.thumb_url} loading="lazy"/>
                {isPlaying && <video src={user.popular_video.file_url} muted={true} loop={true} onCanPlay={(e)=>{
                        e.currentTarget.play();
                }}></video> }
                 <div className={cx('user-controller')}>
                        <Image className={cx('avatar')} src={user.avatar} />
                        <h5 className={cx('user-name')}>{ user.last_name  + ' ' + user.first_name }</h5>
                        <h6 className={cx('nick-name')}> {user.nickname} {user.tick && <IconCheckBlue/> } </h6>
                        <Button className={cx('btn-following')} primary content={'Following'} onClick={(e)=>{
                            
                      }} />
                </div>
            </Link>
         </div>
      <Modal isOpen={isModal}>
         <MethodLoginModal></MethodLoginModal>
      </Modal>
    </> );
}

export default UserNomination;
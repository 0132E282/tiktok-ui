import classNames from "classnames/bind";
import styles from './Following.module.scss';
import * as userAipServices from "~/Services/Api/userServices"
import { useContext } from "react";
import { ProviderServices } from "~/Services/provider/ProviderGlobal";
import UserNomination from "./component/UserNomination/userNomination";
import { useEffect } from "react";
import { useState } from "react";
const cx = classNames.bind(styles);
function Following() {
    const [suggested,setSuggested] = useState([]);
    const [pageUserSuggested,setPageUserSuggested] = useState(1);
    const {infoAccountUser} =useContext(ProviderServices);
    useEffect(()=>{
        userAipServices.getSuggested({ page : pageUserSuggested })
        .then( (res )=>{ setSuggested([...res])})
        .catch(err => console.log(err))
    },[pageUserSuggested])
    return (<div className={cx('wrapper')}>

        <div className={cx('user-nomination')}>
            { !infoAccountUser && suggested.map( (user,index) => <UserNomination key={index} user={user}/> )}
        </div>
    </div>);
}

export default Following;
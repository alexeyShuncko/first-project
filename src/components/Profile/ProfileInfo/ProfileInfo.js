import React from 'react';
import Preloader from '../../comon/preloader/Preloader';
import userPhoto from '../../../Asos/Images/user.png'
import s from './ProfileInfo.module.css';
import ProfileStatusWithHook from './Status/StatusWithHook';



const ProfileInfo = (props) => {

if (!props.profile) {
    return <Preloader />
}

    return (
        <div className={s.profileinfo}>
             {/* <div className={s.fon}>
                <img alt='' src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
            </div>  */}
            <div className={s.cat}>
                <img  alt='' src=
                {!props.profile.photos.large
                ?  userPhoto
                : props.profile.photos.large}></img>

                <ProfileStatusWithHook
                status={props.status} 
                getUpdateStatus={props.getUpdateStatus} />

                <div>Статус: {props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>)
}



export default ProfileInfo;
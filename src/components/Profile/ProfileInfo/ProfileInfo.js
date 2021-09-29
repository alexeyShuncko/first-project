import React from 'react';
import Preloader from '../../comon/preloader/Preloader';
import userPhoto from '../../../Asos/Images/user.png'
import s from './ProfileInfo.module.css';
import ProfileStatusWithHook from './Status/StatusWithHook';



const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
const onMainPhotoUpdate =(e)=> {
if (e.target.files.length)
{
    props.savePhoto(e.target.files[0])
}
}
    return (
        <div className={s.profileinfo}>
            {/* <div className={s.fon}>
                <img alt='' src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
            </div>  */}
            <div className={s.cat}>
                <img alt='' src=
                    {props.profile.photos.large || userPhoto}></img>
                <input type={'file'}  onChange={onMainPhotoUpdate}/>
                <ProfileStatusWithHook
                    status={props.status}
                    getUpdateStatus={props.getUpdateStatus} />

                <div> {props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>)
}



export default ProfileInfo;
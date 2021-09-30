import React, { useState } from 'react';
import Preloader from '../../comon/preloader/Preloader';
import userPhoto from '../../../Asos/Images/user.png'
import s from './ProfileInfo.module.css';
import ProfileStatusWithHook from './Status/StatusWithHook';
import ProfileDataForm from './ProfileDataForm';



const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoUpdate = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.profileinfo}>
            <div className={s.cat}>
                <img alt='' src=
                    {props.profile.photos.large || userPhoto}></img>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoUpdate} />}


                <ProfileStatusWithHook
                    status={props.status}
                    getUpdateStatus={props.getUpdateStatus}
                    isOwner={props.isOwner} />
                <br></br>
                {editMode
                    ? <ProfileDataForm
                        deactivateEditMode={deactivateEditMode}
                        profile={props.profile}
                        getUpdateProfile={props.getUpdateProfile}
                        error={props.error}
                        userId={props.userId} />
                    : <ProfileData
                        profile={props.profile}
                        activateEditMode={activateEditMode}
                        isOwner={props.isOwner} />
                }
            </div>
        </div>)
}
const Contacts = ({ contactTitle, contactValue }) => {
    if (contactValue) {
        return <div className={s.contacts}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    }
    return null
}


const ProfileData = (props) => {
    return <div>
        {props.isOwner &&
            <div><button onClick={props.activateEditMode}>Редактировать</button></div>}
        <div><b>FullName</b>: {props.profile.fullName}</div>
        <div><b>AboutMe</b>: {props.profile.aboutMe}</div>
        <div> <b>LookingForAJob</b>: {props.profile.lookingForAJob ? 'ДА' : 'Нет'}</div>
        {props.profile.lookingForAJob &&
            <div><b>LookingForAJobDescription</b>: {props.profile.lookingForAJobDescription}</div>}
        <div><b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
        })} </div>
    </div>
}


export default ProfileInfo;
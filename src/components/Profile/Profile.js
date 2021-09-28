import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo 
            profile={props.profile}
            status={props.status}
            getUpdateStatus={props.getUpdateStatus}
             />
            <MyPostsContainer /> 
        </div>

    )
}


export default Profile;
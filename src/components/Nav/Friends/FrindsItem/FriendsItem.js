import React from 'react';
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
  
 return (
 
<div className={s.friendsAvaAva}>
      <div className={s.friendsAva}>
        <div className={s.ava}><img alt={''} src={props.adres}></img></div>
        <div className={s.name}>  {props.name}  </div> 
      </div>
    </div>

  )
}

export default FriendsItem;


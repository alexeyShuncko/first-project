import React from 'react';
import s from './ava.module.css';

const Avatar = (props) => {
  return (

    <div className={s.ava}>
      <img alt={''}src={props.adres}></img>
    </div>
  )
}

export default Avatar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../ava/ava';
import s from './DialogItems.module.css';

const DialogItems = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>

      <Avatar adres={props.adres} />

      <div className={s.name}><NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>  {props.name}  </NavLink></div>
    </div>
  )
}

export default DialogItems;
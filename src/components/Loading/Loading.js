import React from "react";
import s from "./Loading.module.css"
import setting from '../../image/Settings.gif';


const Loading =(props)=> {
  
  return (
    <div className={s.load}>
       Loading ...<img src={setting} alt='settings'/>
    </div>
)
}
export default Loading
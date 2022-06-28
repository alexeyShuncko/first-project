import React from "react";
import s from "./Error.module.css"
import setting from '../../image/Settings.gif';


const Error =(props)=> {
  
  return (
    <div className={s.load}>
       Ошибка со стороны сервера ...<img src={setting} alt='settings'/>
    </div>
)
}
export default Error
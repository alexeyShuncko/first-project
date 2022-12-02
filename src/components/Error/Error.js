import React from 'react';
import s from './Error.module.css';
import setting from '../../image/Settings.gif';

const Error = (props) => {
  return (
    <div className={s.load}>
      Server Side Error ...
      <img src={setting} alt="settings" />
    </div>
  );
};
export default Error;

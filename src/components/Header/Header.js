import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import LogoutContainer from './Logout/LogoutContainer';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img  alt='' src='https://static4.depositphotos.com/1020822/350/v/600/depositphotos_3501921-stock-illustration-photography-eye-logo.jpg'></img>
            <div className={s.loginBlock}>
                { props.isAuth 
                ?<div>{props.login} 
                <LogoutContainer /></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            
        </header>)
}
export default Header;
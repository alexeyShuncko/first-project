import React from 'react'


export const Logout = (props) => {

const logoutClick = props.getLogoutThunk

    return (
        <div>
            <button onClick={logoutClick}>Выйти</button>
        </div>
    )

}
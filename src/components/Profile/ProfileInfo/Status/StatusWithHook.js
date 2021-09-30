import React, { useEffect, useState } from 'react'


const ProfileStatusWithHook =(props)=> {

let [editMode, setEdiMode]= useState(false)
let [status, setStatus]= useState(props.status)

useEffect ( () => {
    setStatus(props.status)
},[props.status])

const activateEditMode =()=> {
    setEdiMode(true)
}
const deactivateEditMode =()=> {
    setEdiMode(false)
    props.getUpdateStatus(status)
}
const onStatusChange =(e)=> {
    setStatus(e.currentTarget.value)
}


        return (
        
        <div>
            <b>Status</b>:
            {!editMode &&
                <div> 
                    <span 
                        onDoubleClick={activateEditMode} >
                             {props.status || "Status"}</span>
                </div>}
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                    />
                </div>}

        </div>
        )
    }

export default ProfileStatusWithHook
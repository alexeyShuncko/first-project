import React from 'react';
import s from './Friends.module.css';
import FriendsItem from './FrindsItem/FriendsItem';



const Friends = (props) => {
    
    let friendsElements = props.dial.map(dial => <FriendsItem  key={dial.id} adres={dial.adres} name={dial.name} id={dial.id} />);
    return (
        <div className={s.friends}>
            <div className={s.item}> <h1>Friends</h1></div>
            <div>{friendsElements}</div>

        </div>

    )
}
export default Friends
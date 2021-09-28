import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img alt={''} src='https://i.pinimg.com/474x/7e/cb/02/7ecb022af896de3972f6d32b9489effd.jpg'></img>
                {props.message}
                <div>
                    <span> {props.like} like</span>
                    
                </div>

            </div>

        </div>

    )

}

export default Post;
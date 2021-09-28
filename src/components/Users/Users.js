import React from 'react'
import s from './users.module.css'
import userPhoto from '../../Asos/Images/user.png'
import { NavLink } from 'react-router-dom'
import Paginator from '../comon/paginator/paginator'



let Users = (props) => {

    return <div>

        <Paginator 
        totalUsersCount={props.totalUsersCount }
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        />
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt='' src={u.photos.small != null
                            ? u.photos.small
                            : userPhoto
                        } className={s.photoUrl} />
                    </NavLink>
                </div>
                <div >
                    {u.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                            className={s.buttonFollow}
                            onClick={() => {
                                props.unfollow(u)

                            }}>UnFollow</button>

                        : <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                            className={s.buttonFollow}
                            onClick={() => {
                                props.follow(u)
                            }
                            }>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div className={s.info}>{u.name}</div>
                    {/* <div className={s.info}>{u.status}</div> */}
                </span>
                <span>
                    {/* <div>{u.location.country}</div>
                        <div>{u.location.city}</div> */}
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users

import { getFollow, getUnFollow, getUser } from './../API/api';
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_FETCHING = 'IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [
    ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 10,
    isFetching: true,
    followingInProgress: []
}

const usersReduser = (state = initialState, action) => {


    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })


            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state, 
                followingInProgress: action.inProgress 
                ? [...state.followingInProgress,action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}


export const followSuccess = (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollowSuccess = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrenPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}
export const setTotalUsersCount = (totalCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalCount }
}
export const setIsFetching = (isFetching) => {
    return { type: IS_FETCHING, isFetching }
}
export const setFollowingInProgress = (inProgress, userId) => {
    return { type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, inProgress, userId }
}

export const getUsers = (currentPage,pageSize) => (dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrenPage(currentPage))

        getUser(currentPage,pageSize).then(data => {
            
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            
        })
    }

export const unfollow = (id) => (dispatch) => {

        dispatch(setFollowingInProgress(true, id))
        return new Promise((resolve, reject) => {
        getUnFollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
                resolve()
            }
            dispatch(setFollowingInProgress(false, id))
        })
        
        .catch((err)=>{
            dispatch(unfollowSuccess(id))
            dispatch(setFollowingInProgress(false, id))
            reject(err)
        })
    })

    }

export const follow = (id) =>(dispatch) => {

        dispatch(setFollowingInProgress(true, id))
        return new Promise((resolve, reject) => {
        getFollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
                resolve()
            }
            dispatch(setFollowingInProgress(false, id))
        })
        .catch( (err) =>  {
            dispatch(followSuccess(id))
            dispatch(setFollowingInProgress(false, id))
            reject(err)
        }
        )
    })

    }


export default usersReduser
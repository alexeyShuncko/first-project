
import { getProfile, getStatus, updateStatus } from './../API/api';
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_UPDATE_STATUS ='SET_UPDATE_STATUS'
const DELETE_POST='DELETE_POST'

let initialState = {
    posts: [
        { id: 1, like: 15, message: 'Hi, how are you?' },
        { id: 2, like: 20, message: "It's my first post" },
        { id: 3, like: 25, message: "It's my first post" }
    ],
    profile: null,
    status: ''
}

const profileReduser = (state = initialState, action) => {

 
    switch (action.type) {
      
        case ADD_POST: 
            return{
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1,like: 1, message: action.values }],
               
            }
             
        case DELETE_POST: 
        return{
            ...state,
            posts: [...state.posts.filter(p=> p.id !== action.postId)]
           
        }

            
        case SET_USER_PROFILE: 
    
        return{
            ...state,
            profile: action.profile
        }
        case SET_STATUS: 
    
        return{
            ...state,status: action.status
        }
        case SET_UPDATE_STATUS:
            return{
                ...state,status: action.status
            }

        default:
            return state
    }
}


export const addPost = (values) => {
    return { type: ADD_POST, values }
}
export const deletePost = (postId) => {
    return { type: DELETE_POST, postId }
}

export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}

export const setStatus= (status) => {
    return { type: SET_STATUS, status }
}
export const setUpdateStatus= (status) => {
    return { type: SET_UPDATE_STATUS, status }
}


export const getProfileThunk = (userId) =>  (dispatch) => {
        getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const getUpdateStatus = (status) => {
    return (dispatch) => {
        updateStatus(status).then(data => {
            if (data.resultCode===0)
           { dispatch(setUpdateStatus(status))}
        })
    }
}



export default profileReduser
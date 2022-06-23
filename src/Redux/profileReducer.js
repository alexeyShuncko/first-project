
import { getProfile, getStatus, savePhotoProfile, updateProfile, updateStatus } from './../API/api';
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_SAVE_PHOTO = 'SET_SAVE_PHOTO'
const SET_UPDATE_PROFILE = 'SET_UPDATE_PROFILE'
const SET_ERROR = 'SET_ERROR'
const ADD_LOADING = 'ADD_LOADING'

let initialState = {
    posts: [
        { id: 1, like: 15, message: 'Hi, how are you?' },
        { id: 2, like: 20, message: "It's my first post" },
        { id: 3, like: 25, message: "It's my first post" }
    ],
    profile: null,
    status: '',
    error: [],
    loading: false
}

const profileReduser = (state = initialState, action) => {


    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: state.posts.length + 1, like: 1, message: action.values }]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.postId)]

            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case SET_UPDATE_STATUS:
            return {
                ...state, status: action.status
            }
        case SET_SAVE_PHOTO:
            return {
                ...state, profile: { ...state.profile, photos: action.photos }
            }
        case SET_UPDATE_PROFILE:
            return {
                ...state, profile: { ...state.profile }
            }
        case SET_ERROR:
            return {
                ...state, error: action.error.map(e => e.split('')
                    .slice(0, -1)
                    .join('')
                    .toLowerCase()
                    .slice(30))
            }
        case ADD_LOADING:
            return {
                ...state,
                loading: action.data
            }

        default:
            return state
    }
}




export const setLoading = (data) => {
    return { type: ADD_LOADING, data }
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

export const setStatus = (status) => {
    return { type: SET_STATUS, status }
}
export const setUpdateStatus = (status) => {
    return { type: SET_UPDATE_STATUS, status }
}
export const setSavePhoto = (photos) => {
    return { type: SET_SAVE_PHOTO, photos }
}
export const setUpdateProfile = (profile) => {
    return { type: SET_UPDATE_PROFILE, profile }
}
export const setError = (error) => {
    return { type: SET_ERROR, error }
}



export const getProfileThunk = (userId) => (dispatch) => {
    getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
        dispatch(setLoading(false))
    })
}

export const getStatusThunk = (userId) => (dispatch) => {
    getStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
}

export const getUpdateStatus = (status) => (dispatch) => {
    updateStatus(status).then(data => {
        if (data.resultCode === 0) { dispatch(setUpdateStatus(status)) }
    })
}
export const savePhoto = (file) => (dispatch) => {
    savePhotoProfile(file)
        .then(data => {
            if (data.resultCode === 0)
                dispatch(setSavePhoto(data.data.photos))
        })
}

export const getUpdateProfile = (profile, userId) => (dispatch) => {
    updateProfile(profile).then(data => {
        if (data.resultCode === 0) {
            dispatch(getProfileThunk(userId))
            dispatch(setError([]))
        }
        else {
            dispatch(setError(data.messages))

        }
    })
}



export default profileReduser
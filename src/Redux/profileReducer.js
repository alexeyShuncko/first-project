
import { getAuth, getLogin, getLogout, getProfile, getStatus, savePhotoProfile, updateProfile, updateStatus } from './../API/api';



const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS'
const SET_SAVE_PHOTO = 'SET_SAVE_PHOTO'
const SET_UPDATE_PROFILE = 'SET_UPDATE_PROFILE'
const ADD_LOADING = 'ADD_LOADING'
const SET_PROFILE_LOAD = 'SET_PROFILE_LOAD'


const SET_ID = 'SET_ID'
const SET_USER = 'SET_USER'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_PHOTO = 'SET_PHOTO'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    isAuth: false,
    id: '',
    user: '',
    status: '',
    photo: '',
    serverError: false
}

const profileReduser = (state = initialState, action) => {


    switch (action.type) {


        case SET_ID:
            return {
                ...state,
                id: action.id
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case SET_IS_AUTH:
            return {
                ...state, isAuth: action.data
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
        case ADD_LOADING:
            return {
                ...state,
                loading: action.data
            }
        case SET_PHOTO:
            return {
                ...state,
                photo: action.data
            }
        case SET_PROFILE_LOAD:
            return {
                ...state,
                profileLoad: action.data
            }

        default:
            return state
    }
}






export const setID = (id) => {
    return { type: SET_ID, id }
}
export const setUser = (user) => {
    return { type: SET_USER, user }
}
export const setStatus = (status) => {
    return { type: SET_STATUS, status }
}
export const setIsAuth = (data) => {
    return { type: SET_IS_AUTH, data }
}
export const setPhoto = (data) => {
    return { type: SET_PHOTO, data }
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

export const setProfileLoad = (data) => {
    return { type: SET_PROFILE_LOAD, data }
}
export const setLoading = (data) => {
    return { type: ADD_LOADING, data }
}




export const getAuthThunk = () => (dispatch) => { 
    return new Promise((resolve, reject) => {
    getAuth()
        .then((data) => {
            if (data.resultCode === 1) {
                dispatch(setIsAuth(true))
                resolve('login')
            }
            else if (data.resultCode === 0) {
                console.log('auththunk')
                dispatch(setID(data.data.id))
                dispatch(getProfileThunk(data.data.id))
                resolve('profile')
            }
        })
        .catch(()=> {
            dispatch(setIsAuth(true))
        })
    })  
}

export const getLogoutThunk = () => (dispatch) => {
    getLogout()
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(setIsAuth(false))
            dispatch(getAuthThunk()) 
        }
    })
}

export const getLoginThunk = (email, password, rememberMe, captcha) => (dispatch) => {
    return new Promise((resolve, reject) => {
    getLogin(email, password, rememberMe, captcha)
    .then(data => {
        if (data.resultCode === 0) {
            console.log('loginThunk')
             dispatch(getAuthThunk())
            //  resolve()
            // dispatch(setErrLogin(false, ''))
            // dispatch(setErrPass(false, ''))
        }
        // if (data.resultCode === 1) {
           
        //     if (data.messages[0] === 'Enter valid Email') {
        //         dispatch(setErrLogin(true, 'Невалидный емаил!'))
        //     }
        //     else if (data.messages[0] === 'Incorrect Email or Password') {
        //         dispatch(setErrPass(true, 'Неверный пароль!'))
        //     }
        // }
     
        // if (data.resultCode === 10) {
        //     dispatch(thunkCaptchaUrl())
        // }
    })
})
}





export const getProfileThunk = (userId) => (dispatch) => {
    dispatch(setIsAuth(false))
    getProfile(userId)
        .then(data => {
            dispatch(setUser(data))
            dispatch(getStatusThunk(userId))
            dispatch(setIsAuth(true))
            if (userId === 19240) {
                dispatch(setPhoto(data.photos.large)) 
            }
        })
}

export const getStatusThunk = (userId) => (dispatch) => {
    getStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
}




export const getUpdateStatus = (status) => (dispatch) => {
    return new Promise((resolve, reject) => {
    updateStatus(status)
    .then(data => {
        if (data.resultCode === 0) { 
            dispatch(setUpdateStatus(status))
            resolve() 
        }
    })
    .catch((err)=> reject(err))
})
}

export const savePhoto = (file) => (dispatch) => {
    savePhotoProfile(file)
        .then(data => {
            if (data.resultCode === 0) {}
                dispatch(setSavePhoto(data.data.photos))
        })
}

export const getUpdateProfile = (profile, userId) => (dispatch) => {
    return new Promise((resolve, reject) => {
    updateProfile(profile)
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(getProfileThunk(userId))
            resolve()
        }
    })
    .catch((err) => reject(err))
})
}



export default profileReduser
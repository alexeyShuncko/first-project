import { getAuth, getCaptchaURL, getLogin, getLogout } from "../API/api"
import { getProfileThunk, getStatusThunk, setLoading } from "./profileReducer"
const SET_USER_DATA = 'SET_USER_DATA'
const SET_LOGIN = 'SET_LOGIN'
const SET_LOGOUT = 'SET_LOGOUT'
const SET_CAPTCHA = 'SET_CAPTCHA'
const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN'
const SET_ERROR_PASS = 'SET_ERROR_PASS'

let initialState = {
    id: null,
    email: null,
    login: null,
    //isFetching: true
    isAuth: false,
    password: null,
    rememberMe: false,
    captchaUrl: null,
    errLogin: {
        login: false, text: ''
    },
    errPass: {
        pass: false, text: ''
    }
}

const authReduser = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_LOGIN:
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                captchaUrl: null
            }

        case SET_LOGOUT:
            return {
                ...state, 
                isAuth: action.data,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.captcha
            }
            case SET_ERROR_LOGIN:
                return {
                    ...state,
                    errLogin: {
                        login: action.err, text: action.text
                    }
                }
                case SET_ERROR_PASS:
                return {
                    ...state,
                    errPass: {
                        pass: action.err, text: action.text
                    }
                }

        default:
            return state
    }
}


export const setAuthUserData = (data) => {
    return { type: SET_USER_DATA, data }
}
export const setLogin = (email, password, rememberMe, userId) => { // экшенкриэйтор
    return { type: SET_LOGIN, email, password, rememberMe, userId }
}
export const setLogout = (data) => { // экшенкриэйтор
    return { type: SET_LOGOUT, data }
}

export const setCaptchaUrl = (captcha) => { // экшенкриэйтор
    return { type: SET_CAPTCHA, captcha }
}

export const setErrLogin = (err, text) => { // экшенкриэйтор
    return { type: SET_ERROR_LOGIN, err, text}
}
export const setErrPass = (err, text) => { // экшенкриэйтор
    return { type: SET_ERROR_PASS, err, text}
}






export const getAuthThunk = () => async (dispatch) => { // санкриэйтор
    const data = await getAuth()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data))
        dispatch(getProfileThunk(data.data.id))
        dispatch(getStatusThunk(data.data.id))  
    }
    else {
        dispatch(setLoading(false))
    }
}

export const getLoginThunk = (email, password, rememberMe, captcha) => (dispatch) => {
    getLogin(email, password, rememberMe, captcha).then(data => {
        if (data.resultCode === 0) {
            dispatch(setLogin(email, password, rememberMe))
            dispatch(getAuthThunk())
            dispatch(setErrLogin(false, ''))
            dispatch(setErrPass(false, ''))
        }
        if (data.resultCode === 1) {
           
            if (data.messages[0] === 'Enter valid Email') {
                dispatch(setErrLogin(true, 'Невалидный емаил!'))
            }
            else if (data.messages[0] === 'Incorrect Email or Password') {
                dispatch(setErrPass(true, 'Неверный пароль!'))
            }
        }
     
        if (data.resultCode === 10) {
            dispatch(thunkCaptchaUrl())
        }
    })
}


export const thunkCaptchaUrl = () => (dispatch) => {
    getCaptchaURL().then(data => {
        dispatch(setCaptchaUrl(data.url))
    }
    )
}

export const getLogoutThunk = () => (dispatch) => {
    getLogout()
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(setLogout(false))
        }
    })
}


export default authReduser
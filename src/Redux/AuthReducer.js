import { getAuth, getCaptchaURL, getLogin, getLogout } from "../API/api"
const SET_USER_DATA = 'SET_USER_DATA'
const SET_LOGIN = 'SET_LOGIN'
const SET_LOGOUT = 'SET_LOGOUT'
const SET_CAPTCHA = 'SET_CAPTCHA'


let initialState = {
    id: null,
    email: null,
    login: null,
    //isFetching: true
    isAuth: false,
    password: null,
    rememberMe: false,
    captchaUrl: null
}

const authReduser = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        // case IS_FETCHING:
        // return {
        //     ...state, isFetching: action.isFetching
        // }

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
                ...state, ...action.data,
                isAuth: false
            }
            case SET_CAPTCHA:
                return {
                    ...state, 
                    captchaUrl: action.captcha
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

export const getAuthThunk = () => (dispatch) => { // санкриэйтор
    return getAuth().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data))
        }
    })
}

export const getLoginThunk = (email, password, rememberMe,captcha) => (dispatch) => {
    getLogin(email, password, rememberMe,captcha).then(data=> {
        if (data.resultCode === 0) {
            dispatch(setLogin(email, password, rememberMe))
            dispatch(getAuthThunk())
        }
         else if (data.messages[0]==="Enter valid Email") {
            alert('Неправильный емаил')
        }
        else if (data.messages[0]==="Incorrect Email or Password") {
        alert('Неправильный пароль')
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
    getLogout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setLogout(data.data))
        }
    })
}


export default authReduser
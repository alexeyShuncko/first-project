import { getCaptchaURL } from '../API/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_CAPTCHA = 'SET_CAPTCHA';

const SET_LOADING = 'SET_LOADING';

let initialState = {
  rememberMe: false,
  captchaUrl: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    case SET_LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
        rememberMe: action.rememberMe,
        captchaUrl: null,
      };

    case SET_LOGOUT:
      return {
        ...state,
        isAuth: action.data,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captchaUrl: action.captcha,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (data) => {
  return { type: SET_USER_DATA, data };
};
export const setLogin = (email, password, rememberMe, userId) => {
  // экшенкриэйтор
  return { type: SET_LOGIN, email, password, rememberMe, userId };
};
export const setLogout = (data) => {
  // экшенкриэйтор
  return { type: SET_LOGOUT, data };
};

export const setCaptchaUrl = (captcha) => {
  // экшенкриэйтор
  return { type: SET_CAPTCHA, captcha };
};

export const setLoading = (data) => {
  // экшенкриэйтор
  return { type: SET_LOADING, data };
};

export const thunkCaptchaUrl = () => (dispatch) => {
  getCaptchaURL().then((data) => {
    dispatch(setCaptchaUrl(data.url));
  });
};

export default authReduser;

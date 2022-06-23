import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./AuthReducer";
import messagesReduser from "./messagesReducer";
import profileReduser from "./profileReducer";
import usersReduser from "./usersReducer";
import  thunkMiddleware from "redux-thunk"
import appReduser from "./AppReducer";



let reducers = combineReducers(
    {
        profileData: profileReduser,
        messagesData: messagesReduser,
        usersPage: usersReduser,
        authData: authReduser,
        app: appReduser,
      
    }
)

let store =createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
window.store = store
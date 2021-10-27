import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./AuthReducer";
import messagesReduser from "./messagesReducer";
import profileReduser from "./profileReducer";
import usersReduser from "./usersReducer";
import  thunkMiddleware from "redux-thunk"
import appReduser from "./AppReducer";
import diagrammReduser from "./diagrammReducer";


let reducers = combineReducers(
    {
        profileData: profileReduser,
        messagesData: messagesReduser,
        usersPage: usersReduser,
        auth: authReduser,
        app: appReduser,
        expenses: diagrammReduser 
    }
)

let store =createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
window.store = store
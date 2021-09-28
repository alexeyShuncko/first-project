import { getAuthThunk } from "./AuthReducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialState = {
    initialized: false

}

const appReduser = (state = initialState, action) => {


    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}


export const initialisedSuccess = () => {
    return { type: INITIALIZED_SUCCESS }
}


export const initialiseApp = () => (dispatch) => { // санкриэйтор
    let promise = dispatch(getAuthThunk())
    Promise.all([promise])
    .then(() => {
        dispatch(initialisedSuccess())
    })
}


export default appReduser
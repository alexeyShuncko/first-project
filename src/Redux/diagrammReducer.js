const ADD_DIAGRAMM = 'ADD_DIAGRAMM'


let initialState = {
    diagramm: {
        food: 10,
        alcohol: 20,
        apartment: 30,
        transport: 40
    }
}

const diagrammReduser = (state = initialState, action) => {


    switch (action.type) {

        case ADD_DIAGRAMM:
            return {
                ...state,
                diagramm: {...state.diagramm,
                    food:  action.values.food 
                    ? state.diagramm.food + Number(action.values.food)
                    :state.diagramm.food,

                    alcohol:  action.values.alcohol 
                    ? state.diagramm.alcohol + Number(action.values.alcohol)
                    :state.diagramm.alcohol,

                    apartment: action.values.apartment 
                    ? state.diagramm.apartment + Number(action.values.apartment)
                    :state.diagramm.apartment,

                    transport: action.values.transport 
                    ? state.diagramm.transport + Number(action.values.transport)
                    :state.diagramm.transport
                }
            }
           
        default:
            return state
    }
}

export const addDiagramm = (values) => {
    return { type: ADD_DIAGRAMM, values }
}


// export const getUpdateProfile = (profile, userId) => (dispatch) => {
//     updateProfile(profile).then(data => {
//         if (data.resultCode === 0) {
//             dispatch(getProfileThunk(userId))
//             dispatch(setError([]))
//         }
//         else {
//             dispatch(setError(data.messages))

//         }
//     })
// }


export default diagrammReduser
const ADD_DIAGRAMM = 'ADD_DIAGRAMM'


let initialState = { 
     food:   {name: 'food', color: '#fde23e' , data: [ { id: 1, time: '28.10.21 19-4-0', num: 10} ] , summ: 10},
     alcohol:   {name: 'alcohol', color: '#2222d1' , data: [ { id: 1, time: '28.10.21 19-4-0', num: 15} ] , summ: 15},
     apartment:   {name: 'apartment', color: '#57d9ff' , data: [ { id: 1, time: '28.10.21 19-4-0', num: 25} ] , summ: 25},   
     transport:   {name: 'transport', color: '#169928' , data: [ { id: 1, time: '28.10.21 19-4-0', num: 25} ] , summ: 25}
    
}

const diagrammReduser = (state = initialState, action) => {


    switch (action.type) {

        case ADD_DIAGRAMM:
            return {
                ...state,
                food:
                    action.values.food
                        ? {
                            ...state.food,
                            data: [...state.food.data, { id: state.food.data.length + 1, time: action.time , num: Number(action.values.food) }],
                            summ: state.food.summ + Number(action.values.food)
                        }
                        : state.food,

                 alcohol:  
                 action.values.alcohol 
                 ? {
                    ...state.alcohol,
                    data: [...state.alcohol.data, { id: state.alcohol.data.length + 1, time: action.time , num: Number(action.values.alcohol) }],
                    summ: state.alcohol.summ + Number(action.values.alcohol)
                }
                 : state.alcohol,

                 apartment: 
                 action.values.apartment 
                 ? {
                    ...state.apartment,
                    data: [...state.apartment.data, { id: state.apartment.data.length + 1, time: action.time , num: Number(action.values.apartment) }],
                    summ: state.apartment.summ + Number(action.values.apartment)
                }
                 : state.apartment,

                 transport: 
                 action.values.transport 
                 ? {
                    ...state.transport,
                    data: [...state.transport.data, { id: state.transport.data.length + 1, time: action.time , num: Number(action.values.transport) }],
                    summ: state.transport.summ + Number(action.values.transport)
                }
                 : state.transport
            }
            
           
        default:
            return state
    }
}

export const addDiagramm = (values, time) => {
    return { type: ADD_DIAGRAMM, values, time }
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
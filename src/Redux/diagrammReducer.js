const ADD_DIAGRAMM = 'ADD_DIAGRAMM'
const ADD_ACTIV = 'ADD_ACTIV'
const ADD_SALARY = 'ADD_SALARY'
const ADD_PERIOD = 'ADD_PERIOD'
const ADD_SELECT_DIAGRAMM = 'ADD_SELECT_DIAGRAMM'
const ADD_SALARY_VALUE_TRUE = 'ADD_SALARY_VALUE_TRUE'


let initialState = { 
     food:   {name: 'food', color: '#fde23e' , 
     data: [  
         { id: 1, time: '2021-10-28 19:04', num: 10},
         {id: 2, time: '2021-11-01 14:59', num: 20},
         {id: 3, time: '2021-11-01 15:01', num: 20},
         {id: 4, time: '2021-11-01 15:01', num: 25},
         {id: 5, time: '2021-11-01 15:06', num: 52}
     ] , summ: 127},
     alcohol:   {name: 'alcohol', color: '#2222d1' , data: [ { id: 1, time: '2021-10-28 19:04', num: 40} ] , summ: 40},
     apartment:   {name: 'apartment', color: '#57d9ff' , data: [ { id: 1, time: '2021-10-28 19:04', num: 25} ] , summ: 25},   
     transport:   {name: 'transport', color: '#169928' , data: [ { id: 1, time: '2021-10-28 19:04', num: 25} ] , summ: 25},
    activ: '',
    salary: { salaryNum: 700, salaryDate: '2021-11-08 21:01:25', salaryValueTrue: false },
    periodPo: '',
    periodS: '',
    periodPoTime: '',
    periodSTime: '',
    selectDiagramm: 'процентах'
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
                            data: [...state.food.data, { id: state.food.data.length + 1, time: action.time , num: Number(action.values.food)}],
                            summ: state.food.summ + Number(action.values.food)
                        }
                        : state.food,

                 alcohol:  
                 action.values.alcohol 
                 ? {
                    ...state.alcohol,
                    data: [...state.alcohol.data, { id: state.alcohol.data.length + 1, time: action.time , num: Number(action.values.alcohol)}],
                    summ: state.alcohol.summ + Number(action.values.alcohol)
                }
                 : state.alcohol,

                 apartment: 
                 action.values.apartment 
                 ? {
                    ...state.apartment,
                    data: [...state.apartment.data, { id: state.apartment.data.length + 1, time: action.time , num: Number(action.values.apartment)}],
                    summ: state.apartment.summ + Number(action.values.apartment)
                }
                 : state.apartment,

                 transport: 
                 action.values.transport 
                 ? {
                    ...state.transport,
                    data: [...state.transport.data, { id: state.transport.data.length + 1, time: action.time , num: Number(action.values.transport)}],
                    summ: state.transport.summ + Number(action.values.transport)
                }
                 : state.transport
            }
            case ADD_ACTIV:
                return {
                ...state, activ: action.activ 
            }
            case ADD_SALARY:
                return {
                ...state, salary: {...state.salary, 
                    salaryNum: action.salary, 
                    
                    salaryDate: state.salary.salaryValueTrue === false ?`2021-11-08 21:${action.salary}:25`: state.salary.salaryDate,
                    salaryValueTrue: true}
            }
            case ADD_PERIOD:
                return {
                ...state, 
                periodS: action.periodS, 
                periodPo: action.periodPo,
                periodSTime: action.periodSTime,
                periodPoTime: action.periodPoTime
            }
            case ADD_SELECT_DIAGRAMM:
                return {
                ...state, selectDiagramm:  action.selectDiagramm
            }
            case  ADD_SALARY_VALUE_TRUE:
                return {
                ...state, salary:  {...state.salary,salaryValueTrue: action.value }
            }
           
            
        default:
            return state
    }
}

export const addDiagramm = (values, time) => {
    return { type: ADD_DIAGRAMM, values, time }
}
export const addActiv = (activ) => {
    return { type:  ADD_ACTIV, activ }
}
export const addSalary = (salary) => {
    return { type:  ADD_SALARY, salary }
}
export const addPeriod = (periodS,periodPo,periodSTime,periodPoTime) => {
    return { type:  ADD_PERIOD, periodS,periodPo,periodSTime,periodPoTime}
}
export const addSelectDiagramm = (selectDiagramm) => {
    return { type:  ADD_SELECT_DIAGRAMM, selectDiagramm }
}

export const addSalaryValueTrue = (value) => {
    return { type:  ADD_SALARY_VALUE_TRUE, value }
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
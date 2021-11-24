import { getDollar } from './../API/api';


const ADD_DIAGRAMM = 'ADD_DIAGRAMM'
const ADD_ACTIV = 'ADD_ACTIV'
const ADD_SALARY = 'ADD_SALARY'
const ADD_PERIOD_S = 'ADD_PERIOD_S'
const ADD_PERIOD_PO = 'ADD_PERIOD_PO'
const ADD_PERIOD_S_TIME = 'ADD_PERIOD_S_TIME'
const ADD_PERIOD_PO_TIME = 'ADD_PERIOD_PO_TIME'
const ADD_SELECT_DIAGRAMM = 'ADD_SELECT_DIAGRAMM'
const ADD_SALARY_VALUE_TRUE = 'ADD_SALARY_VALUE_TRUE'
const ADD_EDIT_COLOR = 'ADD_EDIT_COLOR'
const ADD_DOLLAR = 'ADD_DOLLAR'
const ADD_SALARY_SPENT_SELECT = 'ADD_SALARY_SPENT_SELECT'
const ADD_SALARY_REMAINDER_SELECT = 'ADD_SALARY_REMAINDER_SELECT'
const ADD_SALARY_VALUE = 'ADD_SALARY_VALUE'
const ADD_SELECT_DIAGRAMM_STAT = 'ADD_SELECT_DIAGRAMM_STAT'


let initialState = {
    food: {
        name: 'Еда', color: '#fde23e',
        data: [
            { id: 1, time: '2021-10-28 19:04', num: 10 },
            { id: 2, time: '2021-11-01 14:59', num: 20 },
            { id: 3, time: '2021-11-01 15:01', num: 20 },
            { id: 4, time: '2021-11-01 15:01', num: 25 },
            { id: 5, time: '2021-11-01 15:06', num: 52 }
        ], summ: 127
    },
    alcohol: { name: 'Алкоголь', color: '#2222d1', data: [{ id: 1, time: '2021-10-28 19:04', num: 40 }], summ: 40 },
    apartment: { name: 'Квартира', color: '#57d9ff', data: [{ id: 1, time: '2021-10-28 19:04', num: 25 }], summ: 25 },
    transport: { name: 'Транспорт', color: '#169928', data: [{ id: 1, time: '2021-10-28 19:04', num: 25 }], summ: 25 },
    activ: '',
    salary: { salaryNum: 700.01, salaryDate: '2021-11-09', salaryValueTrue: false },
    periodPo: '',
    periodS: '',
    periodPoTime: '23:59',
    periodSTime: '00:01',
    selectDiagramm: '%',
    selectDiagrammStat: '%',
    dollar: {
        Cur_OfficialRate: '',
        Date: ''
    },
    salarySpentSelect: 'BYN',
    salaryRemainderSelect: 'BYN',
    salaryValue: 'BYN'
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
                            data: [...state.food.data, { id: state.food.data.length + 1, time: action.time, num: Number(action.values.food) }],
                            summ: state.food.summ + Number(action.values.food)
                        }
                        : state.food,

                alcohol:
                    action.values.alcohol
                        ? {
                            ...state.alcohol,
                            data: [...state.alcohol.data, { id: state.alcohol.data.length + 1, time: action.time, num: Number(action.values.alcohol) }],
                            summ: state.alcohol.summ + Number(action.values.alcohol)
                        }
                        : state.alcohol,

                apartment:
                    action.values.apartment
                        ? {
                            ...state.apartment,
                            data: [...state.apartment.data, { id: state.apartment.data.length + 1, time: action.time, num: Number(action.values.apartment) }],
                            summ: state.apartment.summ + Number(action.values.apartment)
                        }
                        : state.apartment,

                transport:
                    action.values.transport
                        ? {
                            ...state.transport,
                            data: [...state.transport.data, { id: state.transport.data.length + 1, time: action.time, num: Number(action.values.transport) }],
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
                ...state, salary: {
                    ...state.salary,
                    salaryNum: action.salary,

                    salaryDate: state.salary.salaryValueTrue === false ? `2021-${action.months + 1}-09 ` : state.salary.salaryDate,
                    salaryValueTrue: true
                }
            }
        case ADD_PERIOD_S:
            return {
                ...state,
                periodS: action.periodS
            }
        case ADD_PERIOD_PO:
            return {
                ...state,
                periodPo: action.periodPo
            }
        case ADD_PERIOD_S_TIME:
            return {
                ...state,
                periodSTime: action.periodSTime
            }

        case ADD_SELECT_DIAGRAMM:
            return {
                ...state, selectDiagramm: action.selectDiagramm
            }
            case ADD_SELECT_DIAGRAMM_STAT:
                return {
                    ...state, selectDiagrammStat: action.selectDiagrammStat
                }
        case ADD_SALARY_VALUE_TRUE:
            return {
                ...state, salary: { ...state.salary, salaryValueTrue: action.value }
            }
        case ADD_EDIT_COLOR:
            return {
                ...state,
                food: { ...state.food, color: action.qqq === state.food.name ? action.editColor : state.food.color },
                alcohol: { ...state.alcohol, color: action.qqq === state.alcohol.name ? action.editColor : state.alcohol.color },
                apartment: { ...state.apartment, color: action.qqq === state.apartment.name ? action.editColor : state.apartment.color },
                transport: { ...state.transport, color: action.qqq === state.transport.name ? action.editColor : state.transport.color }
            }

        case ADD_DOLLAR:
            return {
                ...state,
                dollar: {...state.dollar,
                    Cur_OfficialRate: action.dollar,
                    Date: action.data.slice(0, -9)
                }
            }
        case ADD_SALARY_SPENT_SELECT:
            return {
                ...state,
                salarySpentSelect: action.select
            }
        case ADD_SALARY_REMAINDER_SELECT:
            return {
                ...state,
                salaryRemainderSelect: action.select
            }
            case ADD_SALARY_VALUE:
                return {
                    ...state,
                    salaryValue: action.select
                }


            

        default:
            return state
    }
}

export const addDollar = (dollar,data) => {
    return { type: ADD_DOLLAR, dollar,data }
}
export const addSalaryValue = (select) => {
    return { type: ADD_SALARY_VALUE, select }
}
export const addSalarySpentSelect = (select) => {
    return { type: ADD_SALARY_SPENT_SELECT, select }
}
export const addSalaryRemainderSelect = (select) => {
    return { type: ADD_SALARY_REMAINDER_SELECT, select }
}

export const addDiagramm = (values, time) => {
    return { type: ADD_DIAGRAMM, values, time }
}
export const addActiv = (activ) => {
    return { type: ADD_ACTIV, activ }
}
export const addSalary = (salary, months) => {
    return { type: ADD_SALARY, salary, months }
}
export const addPeriodS = (periodS) => {
    return { type: ADD_PERIOD_S, periodS }
}
export const addPeriodPo = (periodPo) => {
    return { type: ADD_PERIOD_PO, periodPo }
}
export const addPeriodSTime = (periodSTime) => {
    return { type: ADD_PERIOD_S_TIME, periodSTime }
}
export const addPeriodPoTime = (periodPoTime) => {
    return { type: ADD_PERIOD_PO_TIME, periodPoTime }
}
export const addEditColor = (editColor, qqq) => {
    return { type: ADD_EDIT_COLOR, editColor, qqq }
}
export const addSelectDiagramm = (selectDiagramm) => {
    return { type: ADD_SELECT_DIAGRAMM, selectDiagramm }
}
export const addSelectDiagrammStat = (selectDiagrammStat) => {
    return { type: ADD_SELECT_DIAGRAMM_STAT, selectDiagrammStat }
}

export const addSalaryValueTrue = (value) => {
    return { type: ADD_SALARY_VALUE_TRUE, value }
}


export const getDollarUpdate = () => (dispatch) => {

    getDollar().then(data => {
        dispatch(addDollar(data.Cur_OfficialRate, data.Date))
    })

}

export default diagrammReduser
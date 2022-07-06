import treck1 from '../music/BoomfunkMCs-Freestyler.mp3'
import treck2 from '../music/Ausländer.mp3'
import treck3 from '../music/EURYTHMICS - Sweet Dreams (Are Made Of This).mp3'
import treck4 from '../music/Чичерина - ТуЛуЛа.mp3'
import treck5 from '../music/Depeche Mode - Personal Jesus.mp3'


const ADD_DURATION_VALUE = 'ADD_DURATION_VALUE'
const ADD_DURATION = 'ADD_DURATION'
const ADD_ACTIV = 'ADD_ACTIV'
const ADD_INDEX_SONG = 'ADD_INDEX_SONG'
const ADD_VOLUME_VALUE = 'ADD_VOLUME_VALUE'

let initialState = {
    arrMusicName: [
        { path: treck1, name: 'BoomfunkMCs-Freestyler', id: 0 },
        { path: treck2, name: 'Ausländer', id: 1 },
        { path: treck3, name: 'EURYTHMICS - Sweet Dreams (Are Made Of This)', id: 2 },
        { path: treck4, name: 'Чичерина - ТуЛуЛа', id: 3 },
        { path: treck5, name: 'Depeche Mode - Personal Jesus', id: 4 }
    ],
    durationValue: 0,
    duration: '',
    active: false,
    indexSong: 0,
    volumeValue: 30 
}

const musicReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_DURATION_VALUE:
            return {
                ...state,
                durationValue: action.data
            }
        case ADD_ACTIV:
            return {
                ...state,
                active: action.data
            }
        case ADD_DURATION:
            return {
                ...state,
                duration: action.duration
            }
        case ADD_INDEX_SONG:
            return {
                ...state,
                indexSong: action.indexSong
            }
        case ADD_VOLUME_VALUE:
            return {
                ...state,
                volumeValue: action.volumeValue
            }

        default:
            return state
    }
}
export default musicReducer


export const setDurationValue = (data) => {
    return { type: ADD_DURATION_VALUE, data }
}
export const setActive = (data) => {
    return { type: ADD_ACTIV, data }
}
export const setDuration = (duration) => {
    return { type: ADD_DURATION, duration }
}
export const setIndexSong = (indexSong) => {
    return { type: ADD_INDEX_SONG, indexSong }
}
export const setVolumeValue = (volumeValue) => {
    return { type: ADD_VOLUME_VALUE, volumeValue }
}





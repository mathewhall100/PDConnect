import {
    USER_INFO
} from '../actions/types';

const INITIAL_STATE = {
    age: 55,
    sex: '',
    race : '',
    PYears : 0,
    firstYearSymptoms : {},
    startPTreatments : 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_INFO:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
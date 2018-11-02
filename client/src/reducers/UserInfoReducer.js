import {
    USER_INFO
} from '../actions/types';

const INITIAL_STATE = {
    age: '',
    sex: '',
    race : '',
    yearDiagnosed : '',
    yearFirstSymptoms : '',
    startPDTreatment : '',
    performDailyActivities : '',

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_INFO:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
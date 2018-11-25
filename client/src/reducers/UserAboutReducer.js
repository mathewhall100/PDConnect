import {
    USER_ABOUT
} from '../actions/types';

const INITIAL_STATE = {
    // age: '',
    // sex: '',
    // race: '',
    // yearDiagnosed: '',
    // startPDTreatment: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ABOUT:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
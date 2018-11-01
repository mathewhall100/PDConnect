import {
    MEDICAL_RESULTS,
    TRIAL_RESULTS
} from '../actions/types';

const INITIAL_STATE = {
    medical_result: [],
    trial_result: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEDICAL_RESULTS:
            return { ...state, medical_result : action.payload }
        case TRIAL_RESULTS:
            return { ...state, trial_result: action.payload }
        default:
            return state;
    }
}
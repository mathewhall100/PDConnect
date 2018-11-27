import {
    TREATMENT_RESULTS,
    TRIAL_RESULTS,
    FOCUSGROUP_RESULTS
} from '../actions/types';

const INITIAL_STATE = {
    treatment_result: [],
    trial_result: [],
    focusgroup_result: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TREATMENT_RESULTS:
            return { ...state, treatment_result : action.payload }
        case TRIAL_RESULTS:
            return { ...state, trial_result: action.payload }
        case FOCUSGROUP_RESULTS:
            return { ...state, focusgroup_result: action.payload }
        default:
            return state;
    }
}
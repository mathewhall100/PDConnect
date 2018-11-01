import {
    CURRENT_TREATMENT, 
    PREVIOUS_TREATMENT
} from '../actions/types';

const INITIAL_STATE = {
    current_treatment: [],
    previous_treatment: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENT_TREATMENT:
        console.log("Current Treatment reducer: ", action.payload)
            return {...state, current_treatment : action.payload}
        case PREVIOUS_TREATMENT:
        console.log("Previous Treatment reducer: ", action.payload)
            return {...state, previous_treatment : action.payload}
        default:
            return state;
    }
}
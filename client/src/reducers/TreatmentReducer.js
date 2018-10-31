import {
    CURRENT_TREATMENT, 
    PREVIOUS_TREATMENT
} from '../actions/types';

const INITIAL_STATE = {
    currentTreatment: [],
    previousTreatment: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENT_TREATMENT:
        console.log("Current Treatment reducer: ", action.payload)
            return action.payload
        case PREVIOUS_TREATMENT:
        console.log("Previous Treatment reducer: ", action.payload)
            return action.payload
        default:
            return state;
    }
}
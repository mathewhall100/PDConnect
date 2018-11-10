import {
    STEP_COUNT
} from '../actions/types';

const INITIAL_STATE = {
    stepperCount : 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STEP_COUNT:
            return { ...state, stepperCount :action.payload }
        default:
            return state;
    }
}
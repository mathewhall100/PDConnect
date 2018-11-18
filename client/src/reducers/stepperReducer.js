import {
    STEP_COUNT
} from '../actions/types';

const INITIAL_STATE = {
    totalSteps : 8,
    stepperCount : 0,
    pageName : '',
    title : '',
    subtitle : '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STEP_COUNT:
            return { ...state, stepperCount :action.payload.stepperCount, pageName : action.payload.pageName, title : action.payload.title, subtitle : action.payload.subtitle }
        default:
            return state;
    }
}
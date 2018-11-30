import {
    STEP_COUNT,
    AGREEMENT,
} from '../actions/types';

const INITIAL_STATE = {
    totalSteps : 8,
    stepperCount : 0,
    pageName : '',
    title : '',
    subtitle : '',
    agree : false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STEP_COUNT:
            return { ...state ,pageImg : action.payload.pageImg, stepperCount :action.payload.stepperCount, pageName : action.payload.pageName, title : action.payload.title, subtitle : action.payload.subtitle, nextPage : action.payload.nextPage, prevPage : action.payload.prevPage }
        case AGREEMENT :
            return { ...state, agree : action.payload}
        default:
            return state;
    }
}
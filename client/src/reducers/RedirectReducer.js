import {
    BACK_TO_REVIEW
} from '../actions/types';

const INITIAL_STATE = {
    redirect : false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BACK_TO_REVIEW:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
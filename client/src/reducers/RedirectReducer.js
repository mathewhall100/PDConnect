import {
    BACK_TO_REVIEW
} from '../actions/types';

const INITIAL_STATE = {
    redirect : false,
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case BACK_TO_REVIEW:
            console.log("payload .. " , action.payload);
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
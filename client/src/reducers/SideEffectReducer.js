import {
    SIDE_EFFECT_INFO
} from '../actions/types';

const INITIAL_STATE = {
    benefitFromSinemet: true,
    sufferedSideEffects: [],
    hasSideEffect: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIDE_EFFECT_INFO:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
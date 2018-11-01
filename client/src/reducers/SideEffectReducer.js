import {
    SIDE_EFFECT_INFO
} from '../actions/types';

const INITIAL_STATE = {
    benefitFromSinemet: true,
    sufferedSideEffects: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIDE_EFFECT_INFO:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
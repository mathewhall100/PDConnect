import {
    USER_NONMOTORSY
} from '../actions/types';

const INITIAL_STATE = {
    hallucinations : 0,
    dizziness : 0,
    constipation : 0,
    poorSleep : 0,
    depression : 0,
    poorCognition : 0,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_NONMOTORSY:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
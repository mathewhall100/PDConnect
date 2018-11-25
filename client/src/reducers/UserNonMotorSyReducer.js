import {
    USER_NONMOTORSY
} from '../actions/types';

const INITIAL_STATE = {
    // hallucinations : -1,
    // dizziness : -1,
    // constipation : -1,
    // poorSleep : -1,
    // depression : -1,
    // poorCognition : -1,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_NONMOTORSY:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
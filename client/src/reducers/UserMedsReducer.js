import {
    USER_MEDS
} from '../actions/types';

const INITIAL_STATE = {
    ropinirole : 0,
    pramipixole : 0,
    rotigotine : 0,
    sinemet : 0,
    sinemetCR : 0,
    rytary : 0,
    doupa : 0,
    amantadine : 0,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_MEDS:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
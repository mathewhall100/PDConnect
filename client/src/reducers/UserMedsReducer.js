import {
    USER_MEDS
} from '../actions/types';

const INITIAL_STATE = {
    ropinirole : -1,
    pramipixole : -1,
    rotigotine : -1,
    sinemet : -1,
    sinemetCR : -1,
    rytary : -1,
    doupa : -1,
    amantadine : -1,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_MEDS:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
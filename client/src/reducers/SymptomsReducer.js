import {
    SUFFERED_SYMPTOMS
} from '../actions/types';

const INITIAL_STATE = {
    sufferedSymptoms: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUFFERED_SYMPTOMS:
            return { ...INITIAL_STATE, sufferedSymptoms : action.payload }
        default:
            return state;
    }
}
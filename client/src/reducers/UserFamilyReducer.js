import {
    USER_FAMILY
} from '../actions/types';

const INITIAL_STATE = {
    // grandparent: false,
    // parent : false,
    // uncleAunt : false,
    // brotherSis : false,
    // child : false,
    // nieceNephew : false,
    // grandchild : false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_FAMILY:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
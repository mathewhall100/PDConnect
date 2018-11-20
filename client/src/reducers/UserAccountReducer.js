import {
    USER_ACCOUNT
} from '../actions/types';

const INITIAL_STATE = {
    message : '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACCOUNT:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
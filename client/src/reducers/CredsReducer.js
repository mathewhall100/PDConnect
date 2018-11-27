import {
    CREDS_INFO
} from '../actions/types';

const INITIAL_STATE = {
    email : '',
    password : '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREDS_INFO:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
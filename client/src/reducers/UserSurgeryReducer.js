import {
    USER_SURGERY
} from '../actions/types';

const INITIAL_STATE = {
    DBS : false,
    FTP : false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_SURGERY:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
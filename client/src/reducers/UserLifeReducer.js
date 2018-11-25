import {
    USER_LIFE
} from '../actions/types';

const INITIAL_STATE = {
    // dailyActivity : ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LIFE:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
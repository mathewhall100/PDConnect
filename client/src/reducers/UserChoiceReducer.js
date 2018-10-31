import {USER_CHOICE} from '../actions/types';

const INITIAL_STATE = {
    userChoice: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CHOICE:
        console.log("UserChoice reducer: ", action.payload)
            return { 
                userChoice:  action.payload.userChoice
            }
        default:
            return state;
    }
}
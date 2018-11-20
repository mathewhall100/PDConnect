import {
    USER_CHOICE
} from './types';


export const submitUserChoice = (choice) => {
    console.log("submitting user choice : ", choice);

    return (dispatch) => {
        dispatch({
            type: USER_CHOICE,
            payload: choice
        })
    }
}
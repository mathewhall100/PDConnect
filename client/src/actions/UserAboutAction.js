import {
    USER_ABOUT
} from './types';


export const submitUserAbout = (objUserAbout) => {
    console.log("submitting user about : ", objUserAbout);

    return (dispatch) => {
        dispatch({
            type: USER_ABOUT,
            payload: objUserAbout
        })
    }
}
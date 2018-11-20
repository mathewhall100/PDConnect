import {
    USER_LIFE
} from './types';


export const submitUserLife = (objUserLife) => {
    console.log("submitting user Life : ", objUserLife);

    return (dispatch) => {
        dispatch({
            type: USER_LIFE,
            payload: objUserLife
        })
    }
}
import {
    USER_FAMILY
} from './types';


export const submitUserFamily = (objUserFamily) => {
    console.log("submitting user family : ", objUserFamily);

    return (dispatch) => {
        dispatch({
            type: USER_FAMILY,
            payload: objUserFamily
        })
    }
}
import { push } from 'react-router-dom';
import {
    USER_MEDS
} from './types';


export const submitUserMeds = (objUserMeds) => {
    console.log("submitting user meds : ", objUserMeds);

    return (dispatch) => {
        dispatch({
            type: USER_MEDS,
            payload: objUserMeds
        })
    }
}
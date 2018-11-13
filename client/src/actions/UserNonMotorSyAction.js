import { push } from 'react-router-dom';
import {
    USER_NONMOTORSY
} from './types';


export const submitUserNonMotorSy = (objUserNonMotorSy) => {
    console.log("submitting user motorsy : ", objUserNonMotorSy);

    return (dispatch) => {
        dispatch({
            type: USER_NONMOTORSY,
            payload: objUserNonMotorSy
        })
    }
}
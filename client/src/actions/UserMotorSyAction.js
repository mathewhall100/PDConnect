import { push } from 'react-router-dom';
import {
    USER_MOTORSY
} from './types';


export const submitUserMotorSy = (objUserMotorSy) => {
    console.log("submitting user motorsy : ", objUserMotorSy);

    return (dispatch) => {
        dispatch({
            type: USER_MOTORSY,
            payload: objUserMotorSy
        })
    }
}
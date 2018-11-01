import { push } from 'react-router-dom';
import {
    MEDICAL_RESULTS,
    TRIAL_RESULTS
} from './types';


export const submitTrialResult = (arrTrial) => {
    console.log("submitting side effects info : ", arrTrial);

    return (dispatch) => {
        dispatch({
            type: TRIAL_RESULTS,
            payload: arrTrial 
        })

    }
}

export const submitMedicalResult = (arrMedical) => {
    console.log("submitting side effects info : ", arrMedical);

    return (dispatch) => {
        dispatch({
            type: MEDICAL_RESULTS,
            payload: arrMedical 
        })

    }
}
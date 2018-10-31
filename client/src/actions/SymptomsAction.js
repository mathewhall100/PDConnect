import { push } from 'react-router-dom';
import {
    SUFFERED_SYMPTOMS
} from './types';


export const submitSymptoms = (arrSymptoms) => {
    console.log("submitting symptoms array : ", arrSymptoms);

    return (dispatch) => {
        dispatch({
            type: SUFFERED_SYMPTOMS,
            payload: arrSymptoms
        })

    }
}
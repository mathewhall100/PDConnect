import axios from 'axios';
import _ from 'lodash';
import {
    CURRENT_TREATMENT
} from './types';


export const submitCurrentTreatment = (currentTreatments) => {
    console.log("submitting current treatment : ", currentTreatments);

    return (dispatch) => {
        dispatch({
            type: CURRENT_TREATMENT,
            payload: currentTreatments
        })
    }
}
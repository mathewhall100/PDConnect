import axios from 'axios';
import _ from 'lodash';
import {
    PREVIOUS_TREATMENT
} from './types';


export const submitPreviousTreatment = (previousTreatments) => {
    console.log("submitting previous treatment : ", previousTreatments);

    return (dispatch) => {
        dispatch({
            type: PREVIOUS_TREATMENT,
            payload: previousTreatments
        })
    }
}
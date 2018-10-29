import axios from 'axios';
import _ from 'lodash';
import {
    INTERESTED_TREATMENT
} from './types';


export const submitInterestedTreatment = (obj) => {
    console.log("submitting interested treatment : ", objUserInfo);

    return (dispatch) => {
        dispatch({
            type: INTERESTED_TREATMENT,
            payload: objUserInfo
        })
    }
}
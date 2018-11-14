import { push } from 'react-router-dom';
import {
    USER_MEDS
} from './types';


export const submitUserMeds = (objUserMeds, objUserTrack) => {
    console.log("submitting user meds : ", objUserMeds, objUserTrack);

    return (dispatch) => {
        dispatch({
            type: USER_MEDS,
            payload: {meds: objUserMeds, track: objUserTrack}
        })
    }
}
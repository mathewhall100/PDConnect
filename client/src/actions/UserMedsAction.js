import {
    USER_MEDS
} from './types';


export const submitUserMeds = (objUserMeds, objUserTrack, objUserAnswerNone) => {
    console.log("submitting user meds : ", objUserMeds, objUserTrack, objUserAnswerNone);

    return (dispatch) => {
        dispatch({
            type: USER_MEDS,
            payload: {meds: objUserMeds, track: objUserTrack, answerNone: objUserAnswerNone}
        })
    }
}
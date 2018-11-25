import {
    USER_LIFE
} from './types';


export const submitUserLife = (objUserLife, objUserADLTrack) => {
    console.log("submitting user Life : ", objUserLife, objUserADLTrack);

    return (dispatch) => {
        dispatch({
            type: USER_LIFE,
            payload: {adl: objUserLife, track: objUserADLTrack}
        })
    }
}
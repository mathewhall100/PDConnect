import {
    USER_NONMOTORSY
} from './types';


export const submitUserNonMotorSy = (objUserNonMotorSy, objUserTrack) => {
    console.log("submitting user motorsy : ", objUserNonMotorSy);

    return (dispatch) => {
        dispatch({
            type: USER_NONMOTORSY,
            payload: {nonMotorSy: objUserNonMotorSy, track: objUserTrack}
        })
    }
}
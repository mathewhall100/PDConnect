import {
    CREDS_INFO
} from './types';


export const submitCredsInfo = (credsInfo) => {
    console.log("submitting credential info : ", credsInfo);

    return (dispatch) => {
        dispatch({
            type: CREDS_INFO,
            payload: credsInfo
        })
    }
}
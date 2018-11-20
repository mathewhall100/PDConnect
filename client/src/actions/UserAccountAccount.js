import { push } from 'react-router-dom';
import {
    USER_ACCOUNT
} from './types';


export const submitUserAccount = (objUserAccount) => {
    console.log("submitting user account : ", objUserAccount);
    /*axios.post("/api/userInfo", objUserAccount)
        .then((response) => {
            console.log("Redux axios response: ", response);
            dispatch({ type: USER_ACCOUNT, payload: response })
        })

    */
}
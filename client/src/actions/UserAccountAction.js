import {
    USER_ACCOUNT
} from './types';
import mailerAPI from '../utils/mailerAPI';

export const submitUserAccount = (objEmail) => {
    console.log("submitting user account : ", objEmail);
    return (dispatch) => {
        mailerAPI.sendMail(objEmail).then( () =>{
            dispatch({
                type: USER_ACCOUNT,
                payload: "Message Sent",
            })
        })

    }


    /*axios.post("/api/userInfo", objUserAccount)
        .then((response) => {
            console.log("Redux axios response: ", response);
            dispatch({ type: USER_ACCOUNT, payload: response })
        })

    */
}
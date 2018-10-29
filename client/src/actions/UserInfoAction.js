import { push } from 'react-router-dom';
import {
    USER_INFO
} from './types';


export const submitUserInfo = (objUserInfo) => {
    console.log("submitting user info : ", objUserInfo);
    
    return (dispatch) => {
        this.props.history.push("/current_treatment");
        dispatch({
            type: USER_INFO,
            payload: objUserInfo
        })
        
    }
}
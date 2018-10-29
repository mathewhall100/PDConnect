import axios from 'axios';
import _ from 'lodash';
import {
    USER_INFO
} from './types';


export const submitUserInfo = (objUserInfo) => {
    console.log("submitting user info : ", objUserInfo);
    
    return (dispatch) => {
        dispatch({
            type: USER_INFO,
            payload: objUserInfo
        })
    }
}
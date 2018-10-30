import axios from 'axios';
import _ from 'lodash';
import {
    USER_CHOICE
} from './types';


export const submitUserChoice = (choice) => {
    console.log("submitting user choice : ", choice);

    return (dispatch) => {
        dispatch({
            type: USER_CHOICE,
            payload: choice
        })
    }
}
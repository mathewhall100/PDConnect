import { push } from 'react-router-dom';
import {
    SIDE_EFFECT_INFO
} from './types';


export const submitSideEffects = (objSideEffects) => {
    console.log("submitting side effects info : ", objSideEffects);

    return (dispatch) => {
        dispatch({
            type: SIDE_EFFECT_INFO,
            payload: objSideEffects
        })

    }
}

import {
    STEP_COUNT
} from './types';

export const updateStepperCount = (stepper) => {
    console.log("get window location : ", window.location.pathname);
    
    return (dispatch) => {
        dispatch({
            type: STEP_COUNT,
            payload: getStepContent(),
        })

    }
}
function getStepContent(){
    switch (window.location.pathname) {
        case '/user/user_about':
            return 0;
        case '/user/user_life':
            return 1;
        case '/user/user_family':
            return 2;
        case '/user/user_meds':
            return 3;
        case '/user/user_surgery':
            return 4;
        case '/user/user_motorsy':
            return 5;
        case '/user/user_nonmotorsy':
            return 6;
        case '/user/result':
            return 7;
        default:
            return 'Unknown step';
    }
}
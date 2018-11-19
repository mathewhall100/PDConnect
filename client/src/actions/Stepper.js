
import {
    STEP_COUNT
} from './types';
import familyImg from '../images/avatar/stepper/family.png';
import lifestyleImg from '../images/avatar/stepper/lifestyle.png';
import meImg from '../images/avatar/stepper/me.png';
import medsImg from '../images/avatar/stepper/meds.png';
import motorImg from '../images/avatar/stepper/motor.png';
import nonMotorImg from '../images/avatar/stepper/non-motor.png';
import surgeryImg from '../images/avatar/stepper/surgery.png';

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
    let objStepperContent = {};
    switch (window.location.pathname) {
        case '/user/user_about':
            objStepperContent = {
                stepperCount : 1,
                pageName : 'You',
                title: `Let's get started! Tell us a bit about you.`,
                pageImg  : `${meImg}`,
                subtitle : ``,
            }
            return objStepperContent;
        case '/user/user_life':
            objStepperContent = {
                stepperCount: 2,
                pageName: 'Your life',
                title: `Now tell us a little about how Parkinson disease affects you`,
                pageImg: `${lifestyleImg}`,
                subtitle: `Please check the box next to the description that best describes how your Parkinson disease has affected your day-to-day activities in the last month.`,
            }
            return objStepperContent;
        case '/user/user_family':
            objStepperContent = {
                stepperCount: 3,
                pageName: 'Your family',
                title: `Tell us about any relatives you may have with Parkinson disease?`,
                pageImg: `${familyImg}`,
                subtitle: `Select the boxes on the family tree below to indicate family members diagnosed with Parkinson disease. When you are done, or if noone in your family has ever been diagnosed with Parkinson disease, click NEXT to go to the next question.`,
            }
            return objStepperContent;
        case '/user/user_meds':
            objStepperContent = {
                stepperCount: 4,
                pageName: 'Medications',
                title: `Congratulations, you're half way through! Now tell us about the medications you take for Parkinson Disease.`,
                pageImg: `${medsImg}`,
                subtitle: ``,
            }
            return objStepperContent;
        case '/user/user_surgery':
            objStepperContent = {
                stepperCount: 5,
                pageName: 'Surgery Procedure',
                title: `Have you ever had any of the following procedures or surgeries to treat Parkinson disease?`,
                pageImg: `${surgeryImg}`,
                subtitle: ``,
            }
            return objStepperContent;
        case '/user/user_motorsy':
            objStepperContent = {
                stepperCount: 6,
                pageName: 'Symptoms (Motor)',
                title: `Almost done! Lastly, about your symptoms`,
                pageImg: `${motorImg}`,
                subtitle: `Patients with Parkinson disease eperience a wide ramge of symptoms. Tell us about any of the following which you may haveb experienced over the past month by clicking the circles next to the symptom. Click on the help icon for more information about each symptom.`,
            }
            return objStepperContent;
        case '/user/user_nonmotorsy':
            objStepperContent = {
                stepperCount: 7,
                pageName: 'Symptoms (Non Motor)',
                title: `Almost done! Lastly, about your symptoms`,
                pageImg: `${nonMotorImg}`,
                subtitle: `Patients with Parkinson disease eperience a wide ramge of symptoms. Tell us about any of the following which you may haveb experienced over the past month by clicking the circles next to the symptom. Click on the help icon for more information about each symptom.`,
            }
            return objStepperContent;
        case '/user/result':
            objStepperContent = {
                stepperCount: 8,
                pageName : 'Results',
                title: `Last question! About any non-motor symptoms`,
                subtitle: `Patients with Parkinson disease eperience a wide ramge of symptoms that aren't just related to movement, though this varies a lot from person to person. tell us if you have had any of the following problems in the past month.`,
            }
            return objStepperContent;
        default:
            objStepperContent = {
                stepperCount: 'Unknown step',
                title: ``,
                subtitle: ``,
            }
            return 'Unknown step';
    }
}
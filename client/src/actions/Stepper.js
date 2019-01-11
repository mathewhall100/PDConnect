
import {
    STEP_COUNT,
    AGREEMENT
} from './types';
import familyImg from '../images/avatar/stepper/family.png';
import lifestyleImg from '../images/avatar/stepper/lifestyle.png';
import meImg from '../images/avatar/stepper/me.png';
import medsImg from '../images/avatar/stepper/meds.png';
import motorImg from '../images/avatar/stepper/motor.png';
import nonMotorImg from '../images/avatar/stepper/non-motor.png';
import surgeryImg from '../images/avatar/stepper/surgery.png';
import accountImg from '../images/avatar/stepper/create_account.png';
import profileImg from '../images/avatar/stepper/profile.png';

export const updateStepperCount = () => {
    console.log("get window location : ", window.location.pathname);

    return (dispatch) => {
        dispatch({
            type: STEP_COUNT,
            payload: getStepContent(),
        })

    }
}

export const updateTermAgreement = (tf) => {
    return (dispatch) => {
        dispatch({
            type : AGREEMENT,
            payload : tf
        })
    }
}


function getStepContent(){
    let objStepperContent = {};
    switch (window.location.pathname) {
        case '/user/create_account' : {
            objStepperContent = {
                stepperCount: "Great,",
                pageName: "Let's Create An Account For you!",
                title: ``,
                pageImg: `${accountImg}`,
                subtitle: ``,
                nextPage: '/services',
                prevPage: `/services`,
            }
            return objStepperContent;
        }
        case '/user/user_start' : {
            objStepperContent = {
                stepperCount: 'Hello!',
                pageName: `Let's get you connected`,
                title: `To ...`,
                pageImg: `${accountImg}`,
                subtitle: ``,
                nextPage : `/user/user_about`,
                prevPage : `/`,
            }
            return objStepperContent;
        }
        case '/user/user_about':
            objStepperContent = {
                stepperCount : 1,
                pageName : 'About You',
                title: `Let's get started! Tell us a bit about you.`,
                pageImg  : `${meImg}`,
                subtitle : `This is important information which we use to individualise the information we provide to you.`,
                nextPage : `/user/user_family`,
                prevPage : `/user/user_start`,
            }
            return objStepperContent;
        case '/user/user_family':
            objStepperContent = {
                stepperCount: 2,
                pageName: 'Your Family',
                title: `Tell us about any relatives you may have with Parkinson disease.`,
                pageImg: `${familyImg}`,
                subtitle: `Select the boxes on the family tree below to indicate family members diagnosed with Parkinson disease. `,
                nextPage: `/user/user_meds`,
                prevPage: `/user/user_about`,
            }
            return objStepperContent;
        case '/user/user_meds':
            objStepperContent = {
                stepperCount: 3,
                pageName: 'Medications',
                title: `Now, what medications do you take for Parkinson disease?`,
                pageImg: `${medsImg}`,
                subtitle: `Click the circles to indicate which medications you are currently taking for Parkinson disease, or select "none" if you don't take any.`,
                nextPage: `/user/user_surgery`,
                prevPage: `/user/user_family`,
            }
            return objStepperContent;
        case '/user/user_surgery':
            objStepperContent = {
                stepperCount: 4,
                pageName: 'Surgery or Procedures',
                title: `Have you ever had any surgery or procedures to treat Parkinson disease?`,
                pageImg: `${surgeryImg}`,
                subtitle: `Some patients have had surgery or procedures to treat their Parkinson disease. Tell us if you have ever had any of the surgeries or procedures opposite. `,
                nextPage: `/user/user_life`,
                prevPage: `/user/user_meds`,
            }
            return objStepperContent;
            case '/user/user_life':
            objStepperContent = {
                stepperCount: 5,
                pageName: "Day-To-Day Activities",
                title: `Awesome, you're over half way through! On this page we'd like to know a little about your day-to-day activities`,
                pageImg: `${lifestyleImg}`,
                subtitle: `Please check the box next to the description that best describes how your Parkinson disease has affected your normal day-to-day activities over the past month.`,
                nextPage: `/user/user_motorsy`,
                prevPage: `/user/user_surgery`,
            }
            return objStepperContent;
        case '/user/user_motorsy':
            objStepperContent = {
                stepperCount: 6,
                pageName: 'Motor Symptoms',
                title: `Almost done! Now about your symptoms of Parkinson disease`,
                pageImg: `${motorImg}`,
                subtitle: `Patients with Parkinson disease experience a wide range of possible symptoms. Tell us about any symptoms you may have experienced over the past month by clicking the circles opposite.`,
                nextPage: `/user/user_nonmotorsy`,
                prevPage: `/user/user_surgery`,
            }
            return objStepperContent;
        case '/user/user_nonmotorsy':
            objStepperContent = {
                stepperCount: 7,
                pageName: 'Other Symptoms',
                title: `Final question! About any other symptoms of Parkinson disease not related to movement`,
                pageImg: `${nonMotorImg}`,
                subtitle: `Patients with Parkinson disease sometimes also have other symptoms which are not related to movement. Tell us if any of the following have bothered you over the past month.`,
                nextPage: `/user/user_review`,
                prevPage: `/user/user_motorsy`,
            }
            return objStepperContent;
        case '/user/user_review':
            objStepperContent = {
                stepperCount: 8,
                pageName: 'Your Profile',
                title: `Read our privacy policy, review your entries, then create a profile.`,
                pageImg: `${profileImg}`,
                subtitle: `The answers you have given will be used to create your profile and to match you with individualised information and services. Your profile will be secure and we will not sell or share any information within it without asking you first.`,
                nextPage: `/user/user_account`,
                prevPage: `/user/user_nonmotorsy`,
            }
            return objStepperContent;
        case '/user/user_account':
            objStepperContent = {
                stepperCount: 'Finally...',
                pageName: 'Set Up An Account',
                title: ``,
                pageImg: `${accountImg}`,
                subtitle: ``,
                nextPage: `/services`,
                prevPage: `/user/user_review`,
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
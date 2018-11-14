import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

import UserReducer from './UserInfoReducer';
import UserChoiceReducer from './UserChoiceReducer';
import SideEffectReducer from './SideEffectReducer';
import SymptomsReducer from './SymptomsReducer';
import TreatmentReducer from './TreatmentReducer';
import ResultReducer from './ResultReducer';
import StepperReducer from './stepperReducer';
import UserAboutReducer from './UserAboutReducer';
import UserLifeReducer from './UserLifeReducer';
import UserFamilyReducer from './UserFamilyReducer';
import UserMedsReducer from './UserMedsReducer';
import UserSurgeryReducer from './UserSurgeryReducer';
import UserMotorSyReducer from './UserMotorSyReducer';
import UserNonMotorSyReducer from './UserNonMotorSyReducer';

export default combineReducers({
    form: formReducer,
    router: routerReducer,
    user: UserReducer,
    userChoice: UserChoiceReducer,
    sideEffect: SideEffectReducer,
    symptom: SymptomsReducer,
    treatments: TreatmentReducer,
    results: ResultReducer,
    stepper: StepperReducer,
    about : UserAboutReducer,
    life : UserLifeReducer,
    family : UserFamilyReducer,
    meds : UserMedsReducer,
    surgery : UserSurgeryReducer,
    motorSy : UserMotorSyReducer,
    nonMotorSy : UserNonMotorSyReducer
});
import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

import ResultReducer from './ResultReducer';
import StepperReducer from './stepperReducer';
import UserAboutReducer from './UserAboutReducer';
import UserLifeReducer from './UserLifeReducer';
import UserFamilyReducer from './UserFamilyReducer';
import UserMedsReducer from './UserMedsReducer';
import UserSurgeryReducer from './UserSurgeryReducer';
import UserMotorSyReducer from './UserMotorSyReducer';
import UserNonMotorSyReducer from './UserNonMotorSyReducer';
import UserAccountReducer from './UserAccountReducer';
import CredsReducer from './CredsReducer';

export default combineReducers({
    form: formReducer,
    router: routerReducer,
    results: ResultReducer,
    stepper: StepperReducer,
    about : UserAboutReducer,
    adl : UserLifeReducer,
    family : UserFamilyReducer,
    meds : UserMedsReducer,
    surgery : UserSurgeryReducer,
    motorSy : UserMotorSyReducer,
    nonMotorSy : UserNonMotorSyReducer,
    accountResponse : UserAccountReducer,
    creds: CredsReducer,
});
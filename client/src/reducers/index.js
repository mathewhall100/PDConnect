import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

import UserReducer from './UserInfoReducer';
import UserChoiceReducer from './UserChoiceReducer';
import SideEffectReducer from './SideEffectReducer';
import SymptomsReducer from './SymptomsReducer';
import TreatmentReducer from './TreatmentReducer';

export default combineReducers({
    form: formReducer,
    router: routerReducer,
    user: UserReducer,
    userChoice: UserChoiceReducer,
    sideEffect: SideEffectReducer,
    symptom: SymptomsReducer,
    currrentTreatments: TreatmentReducer,
    previousTreatments: TreatmentReducer
});
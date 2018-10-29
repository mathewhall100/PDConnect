import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

import UserReducer from './UserInfoReducer';
import SideEffectReducer from './SideEffectReducer';
import SymptomsReducer from './SymptomsReducer';

export default combineReducers({
    form: formReducer,
    router: routerReducer,
    user: UserReducer,
    sideEffect: SideEffectReducer,
    symptom: SymptomsReducer,
});
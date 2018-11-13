import {
    USER_MOTORSY
} from '../actions/types';

const INITIAL_STATE = {
    motorFluctuations : 0,
    earlyWearOff : 0,
    suddenWearOff : 0,
    freezing : 0,
    tremor : 0,
    dsykinesia : 0,
    smallHandwriting : 0,
    slowness : 0,
    falls : 0,
    swallow : 0,
    footCurling : 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_MOTORSY:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
import {
    USER_MOTORSY
} from '../actions/types';

const INITIAL_STATE = {
    // motorFluctuations : -1,
    // earlyWearOff : -1,
    // suddenWearOff : -1,
    // freezing : -1,
    // tremor : -1,
    // dsykinesia : -1,
    // smallHandwriting : -1,
    // slowness : -1,
    // falls : -1,
    // swallow : -1,
    // footCurling : -1
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_MOTORSY:
            return { ...INITIAL_STATE, ...action.payload }
        default:
            return state;
    }
}
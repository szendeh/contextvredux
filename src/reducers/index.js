import {
    CHANGE_NAME
} from "../actions";

export default (state = {}, action) => {
    const { type, name } = action;

    switch(type) {
        case CHANGE_NAME:
            console.log('change name action reducer');
            return ({
                ...state,
                charCount: name.length,
                name,
            });
        default:
            return state;
    }
};

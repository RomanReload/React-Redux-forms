import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const comonReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD-USER":
            {
                return state;
            }
        default:
            return state;
    }
};

const mainReducer = combineReducers({
    form: formReducer,
    common: comonReducer,
});
export default mainReducer;
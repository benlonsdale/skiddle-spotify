import { createStore, combineReducers } from "redux";

export const constants = {
    SET_TOKEN: "SET_TOKEN"
};

const initialState = {
    token: undefined
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_TOKEN: {
            return {
                ...state,
                token: action.payload,
            }            
        }
        default:
            return state;
    }
};

const reducers = combineReducers({
    auth: AuthReducer,
})



export default createStore(reducers);
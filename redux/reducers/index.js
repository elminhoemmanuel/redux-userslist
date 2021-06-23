import { combineReducers } from "redux";
import { cakeReducer } from "./cakeReducer";
import { icecreamReducer } from "./icecreamReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer,
    users : usersReducer
});
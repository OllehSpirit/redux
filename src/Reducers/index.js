import { combineReducers } from 'redux'

import Counter from "./Counter";
import IsLogged from "./IsLogged";

export const AllReducers = combineReducers({
    Counter: Counter,
    IsLogged: IsLogged
});
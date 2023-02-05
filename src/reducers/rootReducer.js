import { combineReducers } from 'redux';
import {authReducer} from "./authReducer";
import {noteReducer} from "./noteReducer";

//llamamos al combineReducers para convinar todos los reducers q vamos a mandar
export const rootReducer = combineReducers({
    calendar: noteReducer,
    auth: authReducer
})

import { combineReducers } from 'redux';
import {mernReducer} from "./mernReducer";


export const rootReducer = combineReducers({
    toDo: mernReducer,
})

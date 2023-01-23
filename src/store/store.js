import {combineReducers, createStore} from "redux";
import {authReducer} from "../reducers/authReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
    auth: authReducer
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store = createStore(reducers, composedEnhancer)
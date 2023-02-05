

import {types} from "../types/types";

const initialState = {
    name:"sheila",
    ui:12
}
export const noteReducer = (state = {initialState}, action) => {
    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return { }

        default:
            return state;
    }
}
import {types} from "../types/types";


const initialState = {
    toDos: [{title:'123', description: 'defrg'}],
}

export const mernReducer = (state = {initialState}, action) => {

    switch ( action.type ) {

        case types.add:
            return {
                ...state,
                toDos: [
                    ...state.notes,
                    action.payload
                ]
            }

        case types.update:
            return {
                ...state,
                toDos: [
                    ...state.notes,
                    action.payload
                ]
            }

        case types.delete:
            return {
                ...state,
                toDos: [
                    ...state.notes,
                    action.payload
                ]
            }

        default:
            return state;
    }
}
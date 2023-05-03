import {types} from "../types/types";


const initialState = {
    toDos: []
}

export const mernReducer = (state = {initialState}, action) => {

    switch ( action.type ) {

        case types.add:
            console.log(action.payload)
            return {
                ...state,
                toDos: [
                    state.toDos,
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
                toDos: state.toDos.filter(
                    t => ( t.id !== action.payload )

                ),
            }

        case types.load:
            return {
                ...state,
                toDos: [ ...action.payload ]

            }

        default:
            return state;
    }
}
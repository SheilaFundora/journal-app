

import {types} from "../types/types";

const initialState = {
    notes: [{title:'123'}],
    activeNote: null,
    activeTypeNote: null
}
export const noteReducer = (state = {initialState}, action) => {

    switch ( action.type ) {

        case types.noteSetActive:
            return {
                ...state,
                activeNote: action.payload
            }

        case types.noteTypeAction:
            return {
                ...state,
                activeTypeNote: action.payload
            }

        case types.cleanActiveNote:
            return {
                ...state,
                activeNote: null,
                activeTypeNote: null

            }

        case types.eventAddNew:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }



        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }

        case types.noteDeleted:
            return {
                ...state,
                notes: state.notes.filter(
                    e => ( e.id !== state.activeNote.id )
                ),
                activeNote: null,
                activeTypeNote: null
            }
            case types.noteLoaded:
                return {
                    ...state,
                    notes: [ ...action.payload ]

                }
        // case types.eventLogout:
        //     return {
        //         ...initialState
        //     }
        //
        default:
            return state;
    }
}
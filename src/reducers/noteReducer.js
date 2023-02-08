

import {types} from "../types/types";

const initialState = {
    notes: [],
    activeNote: null
}
export const noteReducer = (state = {initialState}, action) => {

    switch ( action.type ) {

        case types.noteSetActive:
            return {
                ...state,
                activeNote: action.payload
            }

        case types.authLogout:
            return {
                activeNote: null
            }

        // case types.eventAddNew:
        //     return {
        //         ...state,
        //         events: [ //pongo en el evento todoo lo q estaba mas lo nuevo del payload, s recomendado
        //             // utilizar el operador express ... para mandarlo todo
        //             ...state.events,
        //             action.payload
        //         ]
        //     }
        //
        // case types.eventClearactiveEvents:
        //     return {
        //         ...state,
        //         activeEvents: null
        //     }
        //
        // case types.eventUpdated:
        //     return {
        //         ...state,
        //         events: state.events.map(
        //             e => ( e.id === action.payload.id ) ? action.payload : e
        //         )
        //     }
        //
        // case types.eventDeleted:
        //     return {
        //         ...state,
        //         events: state.events.filter(
        //             e => ( e.id !== state.activeEvents.id )
        //         ),
        //         activeEvents: null
        //     }
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
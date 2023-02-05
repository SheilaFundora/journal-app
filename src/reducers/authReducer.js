
/*
El statge estara vacio cuando no este autenticado y cuando este autenticado tendra:
{
    uid: "effgwegw",
    name: "sheila"
}
*/

import {types} from "../types/types";

const initialState = {
    checking: false,
    // uid: null,
    // name: null
}
export const authReducer = (state = {initialState}, action) => {
    switch ( action.type ) {

        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: true
            }

        case types.authCheckingFinish: //este es el q verifica el toke, si epiro lo revlida y mantngo lo q esta
                                        // en el state
            return {
                ...state,
                checking: true
            }

        case types.authLogout:
            return {
                checking: true
            }

        default:
            return state;
    }
}
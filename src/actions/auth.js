import { fetchSinToken} from "../helpers/fetch";
import {types} from "../types/types";
import Swal from "sweetalert2"


export const stratLogin = (email, password) => {
    return async (dispatch) => {

        try{
            const resp = await fetchSinToken('auth', {email, password}, "POST");
            const body = await resp.json();
            if (body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());

                dispatch(login({
                    uid: body.uid,
                    name: body.name
                }))

            } else {
                Swal.fire('Error', body.sms, 'error')
            }
        }catch (error){
            console.log(error);
        }
    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        try{
            const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
            const body = await resp.json();

            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );

                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }) )

                Swal.fire('Exito', "Se ha registrado con existo", 'success');

            } else {
                Swal.fire('Error', body.sms, 'error');
            }
        }catch (error){
            console.log(error);
        }
    }
}

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

// export const startChecking = () => {
//     return async(dispatch) => {
//
//         try{
//             //para renovar el token en caso d q halla espirado
//             const resp = await fetchConToken( 'auth/renew' );
//             const body = await resp.json();
//
//             if( body.ok ) {
//                 localStorage.setItem('token', body.token );
//                 localStorage.setItem('token-init-date', new Date().getTime() );
//
//                 dispatch( login({
//                     uid: body.uid,
//                     name: body.name
//                 }) )
//             } else {
//                 dispatch( checkingFinish() );
//             }
//         }catch (error){
//             console.log(error);
//         }
//     }
// }
//
// export const startLogout = () => {
//     return ( dispatch ) => {
//
//         localStorage.clear();
//         dispatch( logout() );
//     }
// }

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

// const checkingFinish = () => ({ type: types.authCheckingFinish });
//
const logout = () => ({ type: types.authLogout })


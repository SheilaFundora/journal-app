import {fetchConToken, fetchSinToken} from "../helpers/fetch";
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

export const startRegister = ( name, email, password ) => {
    return async( dispatch ) => {

        console.log({name, email, password});

        try{
            const resp = await fetchSinToken( 'auth/new', { name, email, password }, 'POST' );
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

export const startChecking = () => {
    return async(dispatch) => {

        try{
            const resp = await fetchConToken( 'auth/renew' );
            const body = await resp.json();

            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );

                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }) )
            } else {
                dispatch( checking() );
            }
        }catch (error){
            console.log(error);
        }
    }
}


const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const checking = () => ({ type: types.authChecking });

const logout = () => ({ type: types.authLogout })


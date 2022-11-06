import {types} from "../types/types";
import {firebase, googleAuthProvider} from "../firebase/firebaseConfig";


//action para el login que resive lo necesario para logearse, devuelve el type que es d tipo login y
// el payload que son los valores q necesitamos para ejecutar la accion
export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
}
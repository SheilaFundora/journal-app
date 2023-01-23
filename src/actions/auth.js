import {types} from "../types/types";
import {auth, db, googleAuthProvider} from "../firebase/firebaseConfig";
import {signInWithPopup} from "firebase/auth";
import {addDoc, collection, getDocs, query, where} from "firebase/firestore";

//action para el login que resive lo necesario para logearse, devuelve el type que es d tipo login y
// el payload que son los valores q necesitamos para ejecutar la accion
export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const startGoogleLogin = async () => {
    try {
        const res = await signInWithPopup(auth, googleAuthProvider);
        const user = res.user;
        console.log(user)
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

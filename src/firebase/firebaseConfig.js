import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWY0eAmTZ8-d6TbI55oJHD6RLJNaDBhsU",
    authDomain: "app-redux-3366b.firebaseapp.com",
    projectId: "app-redux-3366b",
    storageBucket: "app-redux-3366b.appspot.com",
    messagingSenderId: "347571555132",
    appId: "1:347571555132:web:90016a9bdf4d3877c3ac39",
    measurementId: "G-G67QC8CJXT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    auth
}
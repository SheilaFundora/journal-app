import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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
const analytics = getAnalytics(app);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
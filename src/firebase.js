// import firebase from 'firebase';
import { initializeApp, } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4ddUY0A34iQYMeYO1egoD2OttTzPgHkk",
    authDomain: "eshop-6da2f.firebaseapp.com",
    projectId: "eshop-6da2f",
    storageBucket: "eshop-6da2f.appspot.com",
    messagingSenderId: "793157631441",
    appId: "1:793157631441:web:a926a9f9efbcb83e8d74f0",
    measurementId: "G-LHKW4VRKX3"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp)

export { db, auth };


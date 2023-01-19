import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyBtTTc-UJX_aIetk1IvNCJr8IlKPh4srYs",
     authDomain: "lenskart-auth.firebaseapp.com",
     projectId: "lenskart-auth",
     storageBucket: "lenskart-auth.appspot.com",
     messagingSenderId: "997002757480",
     appId: "1:997002757480:web:68adc8843a2ef9342902dd"
   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
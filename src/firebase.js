

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBXGzMMbvl4R5uA5dr_cmy5gYtG1pVfpno",

  authDomain: "anina-kuharica.firebaseapp.com",

  projectId: "anina-kuharica",

  storageBucket: "anina-kuharica.firebasestorage.app",

  messagingSenderId: "928829803359",

  appId: "1:928829803359:web:8a07e0b31b92757d1984ea",

  measurementId: "G-Z7V5LF05VQ"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // auth instanca
const db = getFirestore(app); // database instanca
export { auth, db };
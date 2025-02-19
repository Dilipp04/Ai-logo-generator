// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "personal-project-42ebd.firebaseapp.com",
    projectId: "personal-project-42ebd",
    storageBucket: "personal-project-42ebd.firebasestorage.app",
    messagingSenderId: "240377350890",
    appId: "1:240377350890:web:75b2d94f5b21b8e17ae593",
    measurementId: "G-WE48CLLS9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
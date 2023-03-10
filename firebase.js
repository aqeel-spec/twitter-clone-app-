// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: "twitter-clone-app-eaee9.firebaseapp.com",
//     projectId: "twitter-clone-app-eaee9",
//     storageBucket: "twitter-clone-app-eaee9.appspot.com",
//     messagingSenderId: "597313025214",
//     appId: "1:597313025214:web:b9f337672a6b9a7d9a9aef"
// };
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "twitterv2-df4c4.firebaseapp.com",
    projectId: "twitterv2-df4c4",
    storageBucket: "twitterv2-df4c4.appspot.com",
    messagingSenderId: "1053707131033",
    appId: "1:1053707131033:web:95200917b970d8b7140008",
    measurementId: "G-ZL2W49JXPC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }
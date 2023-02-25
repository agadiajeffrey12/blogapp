// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi-2JGHfqMWp8aKC8Q1vG61zyTfh6toWs",
  authDomain: "blog-cb605.firebaseapp.com",
  projectId: "blog-cb605",
  storageBucket: "blog-cb605.appspot.com",
  messagingSenderId: "267759621866",
  appId: "1:267759621866:web:13aff561e6c6e7150ae993",
  measurementId: "G-SF7Z0MX24Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

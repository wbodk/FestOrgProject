// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRkFSdpRX5p-u6jycZ6CWCxO-2NI_mKCg",
  authDomain: "festorgproject.firebaseapp.com",
  projectId: "festorgproject",
  storageBucket: "festorgproject.appspot.com",
  messagingSenderId: "387643413195",
  appId: "1:387643413195:web:90f91630f156384a3ec14e",
  measurementId: "G-EY9NVDMP73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

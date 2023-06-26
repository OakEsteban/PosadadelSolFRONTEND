// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_O9HKn1hn50vXfl75REIgc1ycuU9PzCE",
  authDomain: "laposadadelsol-4d33c.firebaseapp.com",
  projectId: "laposadadelsol-4d33c",
  storageBucket: "laposadadelsol-4d33c.appspot.com",
  messagingSenderId: "1067916209585",
  appId: "1:1067916209585:web:8c96018841b25d9d3ea190",
  measurementId: "G-FC16D56V49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
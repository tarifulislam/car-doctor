// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8gr8pkGCRJYxk7hwACngdpVg6kMND5aY",
  authDomain: "car-doctor-14e51.firebaseapp.com",
  projectId: "car-doctor-14e51",
  storageBucket: "car-doctor-14e51.appspot.com",
  messagingSenderId: "790148526387",
  appId: "1:790148526387:web:77fc2dc583182041294e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
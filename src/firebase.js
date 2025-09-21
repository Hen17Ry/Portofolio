// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApCtV513EIwhtv2HZa8qItkPnP3ak4WLc",
  authDomain: "portofolio-88466.firebaseapp.com",
  projectId: "portofolio-88466",
  storageBucket: "portofolio-88466.firebasestorage.app",
  messagingSenderId: "41308157282",
  appId: "1:41308157282:web:73822bd860bcee90b2a83b",
  measurementId: "G-LN0RBP1ZMJ"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);

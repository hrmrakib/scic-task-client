// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA--2rQ6kCl7qKMu59NXpobqfoGhanwQkc",
  authDomain: "scic-task1.firebaseapp.com",
  projectId: "scic-task1",
  storageBucket: "scic-task1.appspot.com",
  messagingSenderId: "372887411364",
  appId: "1:372887411364:web:56b13cc0e63bf11b63e431",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

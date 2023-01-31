// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8nP3WD63rQe0bbcPLNgxwZ_li4dBxj0Y",
  authDomain: "fir-2318c.firebaseapp.com",
  projectId: "fir-2318c",
  storageBucket: "fir-2318c.appspot.com",
  messagingSenderId: "833132127698",
  appId: "1:833132127698:web:15e8c23e54d5fc71bb140b"
};

// Initialize Firebase
export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBREJSYgx82f4sgdzI33Jjx7e-XqvmVcgw",
  authDomain: "to-dolist-33d50.firebaseapp.com",
  projectId: "to-dolist-33d50",
  storageBucket: "to-dolist-33d50.appspot.com",
  messagingSenderId: "378437146063",
  appId: "1:378437146063:web:6451b5605fa26ae6c52eba"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
export {db}
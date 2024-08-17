// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



export const firebaseConfig = {
  apiKey: "AIzaSyCumHuYAN9lEi9cINLtctWeA9Haeigt4Yo",
  authDomain: "qureshiopticals.firebaseapp.com",
  projectId: "qureshiopticals",
  storageBucket: "qureshiopticals.appspot.com",
  messagingSenderId: "106367555081",
  appId: "1:106367555081:web:5379c442991286c6418ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
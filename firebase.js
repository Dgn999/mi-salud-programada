// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBknFT-_HpQFiVp33oq9T-aDTtZeR64Ug",
  authDomain: "mi-salud-programada.firebaseapp.com",
  projectId: "mi-salud-programada",
  storageBucket: "mi-salud-programada.appspot.com",
  messagingSenderId: "308259898816",
  appId: "1:308259898816:web:922106bac7f75473a07425",
  measurementId: "G-Z59R7FV0R0"
};
//lol
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

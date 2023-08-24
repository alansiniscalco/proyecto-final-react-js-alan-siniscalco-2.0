import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIYJmIRYbHXFGHuN8wvAiyxvwzQMOG4rM",
  authDomain: "stock-final-745ef.firebaseapp.com",
  projectId: "stock-final-745ef",
  storageBucket: "stock-final-745ef.appspot.com",
  messagingSenderId: "292598770639",
  appId: "1:292598770639:web:da6cde40371bf4247e40ba",
  measurementId: "G-JESKD0QXL4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

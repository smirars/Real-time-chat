import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcqA4IBMZmdJ0WaMA3f5PVu6TEDzMGhTE",
    authDomain: "realtime-chat0.firebaseapp.com",
    projectId: "realtime-chat0",
    storageBucket: "realtime-chat0.firebasestorage.app",
    messagingSenderId: "316751006462",
    appId: "1:316751006462:web:6f6221c76a8e2f334873af",
    measurementId: "G-YWHGHHSJFH"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

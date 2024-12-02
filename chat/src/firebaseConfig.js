import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "Ваш API-ключ",
    authDomain: "Ваш домен авторизации",
    projectId: "Ваш ID проекта",
    storageBucket: "Ваш storage bucket",
    messagingSenderId: "Ваш ID отправки сообщений",
    appId: "Ваш App ID",
    measurementId: "Ваш Measurement ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

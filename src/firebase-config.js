import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'geriatria30plus.firebaseapp.com',
    projectId: 'geriatria30plus',
    storageBucket: 'geriatria30plus.appspot.com',
    messagingSenderId: '49835649931',
    appId: '1:49835649931:web:aa9fb85e22766375461d8e',
    measurementId: 'G-GJTJVGWQXH',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


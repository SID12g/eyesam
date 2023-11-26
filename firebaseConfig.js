// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGZ2S1cqO6EbQCu3Ys7nLGoqgm5d6bq9I",
  authDomain: "eyesam-e6e07.firebaseapp.com",
  databaseURL: "https://eyesam-e6e07-default-rtdb.firebaseio.com",
  projectId: "eyesam-e6e07",
  storageBucket: "eyesam-e6e07.appspot.com",
  messagingSenderId: "209413563486",
  appId: "1:209413563486:web:70865e1fdf56640e7640cf",
  measurementId: "G-Z1GTBZ7D0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
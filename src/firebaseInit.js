// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuU18I_8NzNkmAOYiq--pYKqua7rkavJA",
  authDomain: "blog-app-db657.firebaseapp.com",
  projectId: "blog-app-db657",
  storageBucket: "blog-app-db657.firebasestorage.app",
  messagingSenderId: "926372200800",
  appId: "1:926372200800:web:0c4df97351aeda1b5b1e05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
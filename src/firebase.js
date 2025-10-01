// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByycsXhbVQzXMFpHEdaE_ycgDU04LUH0A",
  authDomain: "recipe-sharing-3ca72.firebaseapp.com",
  projectId: "recipe-sharing-3ca72",
  storageBucket: "recipe-sharing-3ca72.firebasestorage.app",
  messagingSenderId: "93447991093",
  appId: "1:93447991093:web:a34e9500dd805ab734e67c",
  measurementId: "G-C8PL6Y5871",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Firestore reference
const db = getFirestore(app);

export { db };

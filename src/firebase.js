import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeuFju5M3VrEdC8k2o8w8m3_H2G-qgrd4",
  authDomain: "chatapps-15643.firebaseapp.com",
  projectId: "chatapps-15643",
  storageBucket: "chatapps-15643.appspot.com",
  messagingSenderId: "1077415313268",
  appId: "1:1077415313268:web:759f3574fc38181a4ef621"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

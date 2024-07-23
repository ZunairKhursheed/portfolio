// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwzWJdX2IVICpM_vukPDnALHOR6PlycrQ",
  authDomain: "volunteer-management-sys-bde65.firebaseapp.com",
  projectId: "volunteer-management-sys-bde65",
  storageBucket: "volunteer-management-sys-bde65.appspot.com",
  messagingSenderId: "758037748934",
  appId: "1:758037748934:web:b356d1a5f8692de6798bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };

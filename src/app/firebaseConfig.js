// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmKMr6HT_n7bXnOwkRCF-Ta8nxwr-FdYY",
  authDomain: "yemen-alsaeed.firebaseapp.com",
  projectId: "yemen-alsaeed",
  storageBucket: "yemen-alsaeed.firebasestorage.app",
  messagingSenderId: "128230787299",
  appId: "1:128230787299:web:f788d60223a91dd393ddd6",
  measurementId: "G-647C7L6JPG"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
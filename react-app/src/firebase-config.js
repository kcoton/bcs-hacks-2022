// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcbYfxnS5iCodLFyZ_P_-hY6H3TVzotHs",
  authDomain: "bcs-hackathon-project-2022.firebaseapp.com",
  projectId: "bcs-hackathon-project-2022",
  storageBucket: "bcs-hackathon-project-2022.appspot.com",
  messagingSenderId: "900476565614",
  appId: "1:900476565614:web:0bae30360e0bd6338c4e7f",
  measurementId: "G-7TKH5MQ6KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
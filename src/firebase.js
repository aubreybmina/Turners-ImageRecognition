import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: "turnersapp-59975",
  storageBucket: "turnersapp-59975.appspot.com",
  messagingSenderId: "1096938833527",
  appId: "1:1096938833527:web:7f03e56447776d56686872",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdiCMfxFshcZCLQr3uReREEeWbXl4zg6w",
  authDomain: "coffeland-e625c.firebaseapp.com",
  projectId: "coffeland-e625c",
  storageBucket: "coffeland-e625c.firebasestorage.app",
  messagingSenderId: "459236656736",
  appId: "1:459236656736:web:444c7fe31e057b16c46505"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;
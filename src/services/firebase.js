import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFXxl06SE49JmnAtCFSv0BL3KuBH4laQI",
  authDomain: "michaelson-db.firebaseapp.com",
  projectId: "michaelson-db",
  storageBucket: "michaelson-db.firebasestorage.app",
  messagingSenderId: "408299339921",
  appId: "1:408299339921:web:d1d1de4cb4dce6df9e7f30",
  measurementId: "G-7KB8QWZWSP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

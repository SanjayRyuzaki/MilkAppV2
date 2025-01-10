import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNuFJvBWFG2k4YJGr-ALhPpPj_BNtSgbQ",
  authDomain: "milkdeliveryappbackend.firebaseapp.com",
  projectId: "milkdeliveryappbackend",
  storageBucket: "milkdeliveryappbackend.firebasestorage.app",
  messagingSenderId: "804559745967",
  appId: "1:804559745967:web:300d97ab7d9be0186fb55a",
  measurementId: "G-QP9QRNMDVW"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCeGJnD6z5yfZ9-2JSmiKcIctihf_1AnSM",
  authDomain: "oghma---mvp.firebaseapp.com",
  projectId: "oghma---mvp",
  storageBucket: "oghma---mvp.firebasestorage.app",
  messagingSenderId: "1034840578149",
  appId: "1:1034840578149:web:9b77c5e53c07442815ce8c",
  measurementId: "G-MW819T94D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Configure auth persistence
auth.useDeviceLanguage();
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.local.FIREBASE_APIKEY,
  authDomain: import.meta.env.local.FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.local.FIREBASE_PROJECTID,
  storageBucket: import.meta.env.local.FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.local.FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.local.FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

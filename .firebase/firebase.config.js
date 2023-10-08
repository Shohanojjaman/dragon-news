// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_jEgzvA3x960qoVFf4bQa0BCKrdt2iSw',
  authDomain: 'dragon-news-4178d.firebaseapp.com',
  projectId: 'dragon-news-4178d',
  storageBucket: 'dragon-news-4178d.appspot.com',
  messagingSenderId: '942083446594',
  appId: '1:942083446594:web:47568a79e071a65a5b5adb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

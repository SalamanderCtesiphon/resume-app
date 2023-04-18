import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-527NiXtRS3R1KoK_WmjZC1PNUWR5Qho",
  authDomain: "resume-app-a1248.firebaseapp.com",
  projectId: "resume-app-a1248",
  storageBucket: "resume-app-a1248.appspot.com",
  messagingSenderId: "926511178643",
  appId: "1:926511178643:web:3ac6ea415778a35d277e66",
  measurementId: "G-N4Q6EK94NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



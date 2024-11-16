import React from 'react';
import App from './Components/App';
import './Components/style.css';
import './index'; 
import { createRoot } from "react-dom/client";

// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// FIREBASE
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi1nb_oU7vhRT1ClBnv_nEx3SdoH2Tp6I",
  authDomain: "info-340-90a02.firebaseapp.com",
  databaseURL: "https://info-340-90a02-default-rtdb.firebaseio.com",
  projectId: "info-340-90a02",
  storageBucket: "info-340-90a02.appspot.com",
  messagingSenderId: "68884465358",
  appId: "1:68884465358:web:be0f7de1d66b2feca0f29f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


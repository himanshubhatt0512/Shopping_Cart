import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASDT8-luAOnvk3ef_mP81aPVpj5lJ0sog",
  authDomain: "cart-a478a.firebaseapp.com",
  projectId: "cart-a478a",
  storageBucket: "cart-a478a.appspot.com",
  messagingSenderId: "743524157093",
  appId: "1:743524157093:web:fd4619330b8b80f7566f4c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
// const db = firebase.firestore();
// export default db;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



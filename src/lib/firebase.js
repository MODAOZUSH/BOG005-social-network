// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  /*   signInWithEmailAndPassword,
  
    , */
} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
// import { register } from '../components/register.js';
// import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCwd_I9pnGtenncq4D3ADe2aqB2YwSqy54',
  authDomain: 'travelers-e8b5a.firebaseapp.com',
  projectId: 'travelers-e8b5a',
  storageBucket: 'travelers-e8b5a.appspot.com',
  messagingSenderId: '532240998590',
  appId: '1:532240998590:web:3ebe2040c59dda333dbeef',
  measurementId: 'G-KZ49QE41R7',
});

export const auth = getAuth(firebaseApp);

export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log('Logged in!');
  } else {
    console.log('No User');
  }
});
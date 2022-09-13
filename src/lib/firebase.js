// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
/*   signInWithEmailAndPassword,
  createUserWithEmailAndPassword, */
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

// const db = getFirestore(firebaseApp);

/* export const loginEmailPassword = async () => {
  const loginEmail = register.inputEmail.value;
  const loginPassword = register.inputPassword.value;

  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user);
}; */

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log('Logged in!');
  } else {
    console.log('No User');
  }
});

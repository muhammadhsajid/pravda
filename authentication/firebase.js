import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDLH8ctW7-Nrms9zpcXlTIj4clVO9571l8",
  authDomain: "pravda-a2d29.firebaseapp.com",
  databaseURL: "https://pravda-a2d29-default-rtdb.firebaseio.com",
  projectId: "pravda-a2d29",
  storageBucket: "pravda-a2d29.appspot.com",
  messagingSenderId: "583307489340",
  appId: "1:583307489340:web:a7b42839a7a84018fad339",
  measurementId: "G-5YVT1V5FZK"
};

// Initialize Firebase 
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const db = app.firestore();

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export {
  db,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
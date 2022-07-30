// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTl1B0OaoZdil2ke336YYQ4P8QUgkZMw8",
  authDomain: "dts-final-project-9db4e.firebaseapp.com",
  projectId: "dts-final-project-9db4e",
  storageBucket: "dts-final-project-9db4e.appspot.com",
  messagingSenderId: "257969703874",
  appId: "1:257969703874:web:b475df920f104b05f9e45b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function Auth
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(UserCredential.user);
  } catch (error) {
    console.log(error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const activeUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(activeUser.user);
  } catch (error) {
    console.log(error.message);
  }
};

const resetPassword = async (email) => {
  try {
    sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error.message);
  }
};

const logOut = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export {
  auth,
  db,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resetPassword,
  logOut,
};

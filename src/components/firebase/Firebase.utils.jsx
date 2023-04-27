import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyACu_6jimoqCU6HJLDnINkEvXwlAtgtQPw",
  authDomain: "e-commerce-1aedc.firebaseapp.com",
  projectId: "e-commerce-1aedc",
  storageBucket: "e-commerce-1aedc.appspot.com",
  messagingSenderId: "733621725768",
  appId: "1:733621725768:web:f37f2b762f4d0b792dc67d",
  measurementId: "G-DV8RM24QB3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

//HERE THIS FUNCTION ALLOWS US TO STORE THE OBJECT GENERATED FROM AUTH FUNCTION

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  //HERE CREATING NEW USER FROM userAuth if they dont exist in the db
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// HERE FOR GOOGLE SIGN IN
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

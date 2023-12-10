// Import the functions you need from the SDKs you need
import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC63Ey3KOX32AaUnXYZD1jWuOPtfoFZXAA",
  authDomain: "villanovarideshareproject.firebaseapp.com",
  projectId: "villanovarideshareproject",
  storageBucket: "villanovarideshareproject.appspot.com",
  messagingSenderId: "1017365219527",
  appId: "1:1017365219527:web:61f3e7629a729d74d3d6e2"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

//Export firestore database so it can be imported into our react app as needed
const db = firebase.firestore();
export { firebase, db };
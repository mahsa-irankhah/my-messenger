import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAAz2SXS5vH3nJjnrgi3OuqFq3_znTVlUY",
  authDomain: "ava-messenger.firebaseapp.com",
  projectId: "ava-messenger",
  storageBucket: "ava-messenger.appspot.com",
  messagingSenderId: "531561231126",
  appId: "1:531561231126:web:dc291cc293a52f19dd9637",
}).auth();
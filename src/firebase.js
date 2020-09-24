import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRb37W4QhlbYGpuVaQjQ1zZlQpNc9pljc",
  authDomain: "clone-2d6d9.firebaseapp.com",
  databaseURL: "https://clone-2d6d9.firebaseio.com",
  projectId: "clone-2d6d9",
  storageBucket: "clone-2d6d9.appspot.com",
  messagingSenderId: "1042129611896",
  appId: "1:1042129611896:web:ba3ffefa2cf61d292f918d",
  measurementId: "G-TMYD5285DV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

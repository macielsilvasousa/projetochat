import firebase from "firebase/app";
import "firebase/database";
import "firebase/firebase-firestore"
import "firebase/auth";


let firebaseConfig = {
    apiKey: "AIzaSyDziF_Or1z5f1SqxTMpizXLbRgY4RX5fkY",
    authDomain: "projetochat-2790b.firebaseapp.com",
    projectId: "projetochat-2790b",
    storageBucket: "projetochat-2790b.appspot.com",
    messagingSenderId: "270282802692",
    appId: "1:270282802692:web:279c816ce86622a4bb5751",
    measurementId: "G-QEBXLRN4DQ"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
 export default firebase;
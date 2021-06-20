import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCMi_jCyb6C96s8TCjGHTH2M23cw-LEuec",
    authDomain: "textops-68d9c.firebaseapp.com",
    projectId: "textops-68d9c",
    storageBucket: "textops-68d9c.appspot.com",
    messagingSenderId: "472255455271",
    appId: "1:472255455271:web:f93920df25d4464894ee02",
  })
  .auth();

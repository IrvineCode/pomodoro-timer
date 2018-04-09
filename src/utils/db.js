import * as firebase from "firebase";
require("firebase/firestore");

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDjXSOyhV_3KC4KwT3loQmTMdMtFXMXWPs",
  authDomain: "pomodoro-timer-da0c2.firebaseapp.com",
  databaseURL: "https://pomodoro-timer-da0c2.firebaseio.com",
  projectId: "pomodoro-timer-da0c2",
  storageBucket: "pomodoro-timer-da0c2.appspot.com",
  messagingSenderId: "443216851048"
};
firebase.initializeApp(config);

const db = firebase.firestore();
export default db;

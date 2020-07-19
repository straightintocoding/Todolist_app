import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5Pz8_km9lBPupyEiLlzOO6fw89Eq1wI0",
  authDomain: "todo-d483a.firebaseapp.com",
  databaseURL: "https://todo-d483a.firebaseio.com",
  projectId: "todo-d483a",
  storageBucket: "todo-d483a.appspot.com",
  messagingSenderId: "272895198311",
  appId: "1:272895198311:web:c2b5b33f14a01a4af3c0c2",
  measurementId: "G-GWBWX77DHE"
});
const db = firebaseApp.firestore();

export default db;

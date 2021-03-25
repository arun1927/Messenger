import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBBrhBJTb-GPyAyUT6cKl750DmmSAqt2_U",
  authDomain: "messenger-d95b2.firebaseapp.com",
  databaseURL: "https://messenger-d95b2.firebaseio.com",
  projectId: "messenger-d95b2",
  storageBucket: "messenger-d95b2.appspot.com",
  messagingSenderId: "714265987497",
  appId: "1:714265987497:web:070c38b618c65002939cb8",
  measurementId: "G-M93JNND5J9"

});
const db = firebaseApp.firestore();
export default db;
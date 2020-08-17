import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3nINxRjV26E8Z7xgQ800RSrwiC8IkjhU",
  authDomain: "tinder-clone-bmg.firebaseapp.com",
  databaseURL: "https://tinder-clone-bmg.firebaseio.com",
  projectId: "tinder-clone-bmg",
  storageBucket: "tinder-clone-bmg.appspot.com",
  messagingSenderId: "8838152831",
  appId: "1:8838152831:web:03afccd505bb26d65ef54a",
  measurementId: "G-8QNMEJYG6S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

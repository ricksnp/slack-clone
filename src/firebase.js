import firebase from "firebase";

// Needed in order to connect to our Firestore Database / Project
const firebaseConfig = {
  apiKey: "AIzaSyCyWKhn_t-fRAcSkqtm6IIrS45tttxENWQ",
  authDomain: "slack-clone-11.firebaseapp.com",
  projectId: "slack-clone-11",
  storageBucket: "slack-clone-11.appspot.com",
  messagingSenderId: "351969820599",
  appId: "1:351969820599:web:8ed284e0d4d025a1f17232",
  measurementId: "G-BP1RJFN04M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
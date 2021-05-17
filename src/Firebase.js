import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzvOnMa0_p8zZNMENKpGdePtaShR1-igY",
    authDomain: "clone-4eeab.firebaseapp.com",
    projectId: "clone-4eeab",
    storageBucket: "clone-4eeab.appspot.com",
    messagingSenderId: "105200974902",
    appId: "1:105200974902:web:0b810af58a6e3700acac97",
    measurementId: "G-TR4PS9R1NJ"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
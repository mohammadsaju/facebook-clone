import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1aLfF118izIT1DckvyyuC_O1-1cp1w6U",
    authDomain: "facebook-clone-12131.firebaseapp.com",
    projectId: "facebook-clone-12131",
    storageBucket: "facebook-clone-12131.appspot.com",
    messagingSenderId: "109557582487",
    appId: "1:109557582487:web:ea201fbfad9e69af9cf7d2",
    measurementId: "G-B99F9DC5Y5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default(db);
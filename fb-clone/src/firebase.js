import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKVblWr8AUQGoYXbIzObwizsI6RSctA0c",
    authDomain: "facebook-clone-342a0.firebaseapp.com",
    projectId: "facebook-clone-342a0",
    storageBucket: "facebook-clone-342a0.appspot.com",
    messagingSenderId: "349149088816",
    appId: "1:349149088816:web:976a73bbc3ed632a96b1f5",
    measurementId: "G-3N9H3LK118"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBH1U5rxlUOj2shHDtQ3WG3NdeL0KhM7iM",
    authDomain: "react-app-cursos-f38cb.firebaseapp.com",
    projectId: "react-app-cursos-f38cb",
    storageBucket: "react-app-cursos-f38cb.appspot.com",
    messagingSenderId: "584649793082",
    appId: "1:584649793082:web:9358c18ad8d7b440b79f03"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }
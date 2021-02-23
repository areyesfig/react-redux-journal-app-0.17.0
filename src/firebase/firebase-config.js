import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
  };

  const firebaseConfigTesting = {
    apiKey: "AIzaSyDk6M3_jKltoLgJz59gfpFeHhA-cGLWp9U",
    authDomain: "react-test-app-33343.firebaseapp.com",
    projectId: "react-test-app-33343",
    storageBucket: "react-test-app-33343.appspot.com",
    messagingSenderId: "827557583508",
    appId: "1:827557583508:web:90039e7e701d908e1c3281"
  }

  if ( process.env.NODE_ENV === 'test'){
      //testing
      firebase.initializeApp(firebaseConfigTesting);

  }else{
      //prod,desa
      firebase.initializeApp(firebaseConfig);
  }


  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXi4sccWhu7kZyge-0OEzp513zNnLtQUA",
    authDomain: "milas-shop.firebaseapp.com",
    databaseURL: "https://milas-shop.firebaseio.com",
    projectId: "milas-shop",
    storageBucket: "",
    messagingSenderId: "259081738355",
    appId: "1:259081738355:web:7e1da99f4f497738"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Google auth config

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
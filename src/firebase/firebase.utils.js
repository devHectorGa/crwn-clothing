import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB8iociPTQ2NAxL8D_G6gwrL50hl-oJhu0",
  authDomain: "irrigation-7a578.firebaseapp.com",
  databaseURL: "https://irrigation-7a578.firebaseio.com",
  projectId: "irrigation-7a578",
  storageBucket: "irrigation-7a578.appspot.com",
  messagingSenderId: "450541305754",
  appId: "1:450541305754:web:80cf87013086a36c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

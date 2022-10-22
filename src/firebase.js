import * as firebase from "firebase/app"
import "firebase/auth"
const fireBaseApp = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "nft-react-app-612f2.firebaseapp.com",
  projectId: "nft-react-app-612f2",
  storageBucket: "nft-react-app-612f2.appspot.com",
  messagingSenderId: "665185868393",
  appId: "1:665185868393:web:af71c75e0e097c625ee0f8",
  measurementId: "G-BRVQY0XZBL"
});
export default fireBaseApp;


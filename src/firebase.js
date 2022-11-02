import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDCB5l8dfhKpsbl20qvgyN0KOErGRBn0XU",
  authDomain: "nft-react-app-612f2.firebaseapp.com",
  projectId: "nft-react-app-612f2",
  storageBucket: "nft-react-app-612f2.appspot.com",
  messagingSenderId: "665185868393",
  appId: "1:665185868393:web:af71c75e0e097c625ee0f8",
  measurementId: "G-BRVQY0XZBL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;

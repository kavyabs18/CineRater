import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDySaFI-gs8cRArZmcLyTYUblk2iXwRPhg",
  authDomain: "cinerater-fdddd.firebaseapp.com",
  projectId: "cinerater-fdddd",
  storageBucket: "cinerater-fdddd.appspot.com",
  messagingSenderId: "391951050627",
  appId: "1:391951050627:web:95b867f316642f6806b8b6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db,"movies")
export const reviewsRef = collection(db,"reviews")
export const usersRef = collection(db,"users")

export default app;
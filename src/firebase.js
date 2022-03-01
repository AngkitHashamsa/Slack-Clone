// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFlAf7-8qdY3rnGtBx7P95clsREmynsv8",
  authDomain: "slack-clone-84ad7.firebaseapp.com",
  projectId: "slack-clone-84ad7",
  storageBucket: "slack-clone-84ad7.appspot.com",
  messagingSenderId: "706002663104",
  appId: "1:706002663104:web:36253d5d660b0386e0df25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

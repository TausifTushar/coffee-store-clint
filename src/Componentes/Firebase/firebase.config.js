// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB94Z7RblMp7XZKXZuA29rY44SYDivUrJ4",
  authDomain: "auth-coffee-store.firebaseapp.com",
  projectId: "auth-coffee-store",
  storageBucket: "auth-coffee-store.appspot.com",
  messagingSenderId: "547486953771",
  appId: "1:547486953771:web:224fa3f32b6af96d94d56e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
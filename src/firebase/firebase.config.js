
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDpzkIaXfHdZwuSeCsuhYLUG3joPP5QGc",
  authDomain: "fashion-app-de3f4.firebaseapp.com",
  projectId: "fashion-app-de3f4",
  storageBucket: "fashion-app-de3f4.appspot.com",
  messagingSenderId: "309250809097",
  appId: "1:309250809097:web:d7c5d51560b7a6d0bf87d8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


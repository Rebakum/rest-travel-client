// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq_Wmrh3zoSEr_1QYD_UsTXWqS9mnPapk",
  authDomain: "rest-travel-61be1.firebaseapp.com",
  projectId: "rest-travel-61be1",
  storageBucket: "rest-travel-61be1.appspot.com",
  messagingSenderId: "431702557588",
  appId: "1:431702557588:web:9f290882bc4600b8ce0581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
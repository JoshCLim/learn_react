// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoMBf1v2S-NC7UbaFa8fu2ZtHQy_t9Fhs",
  authDomain: "pedrotech-react-course-d3071.firebaseapp.com",
  projectId: "pedrotech-react-course-d3071",
  storageBucket: "pedrotech-react-course-d3071.appspot.com",
  messagingSenderId: "833511586670",
  appId: "1:833511586670:web:bd7edeabe3fbf6a7101f7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

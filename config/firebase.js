// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyvCdyaTVY2dm1HWG5NNdZw8O4e69FmXA",
  authDomain: "react-native-gym-b86e7.firebaseapp.com",
  projectId: "react-native-gym-b86e7",
  storageBucket: "react-native-gym-b86e7.appspot.com",
  messagingSenderId: "859682575170",
  appId: "1:859682575170:web:62264397cb8625e2ee6edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


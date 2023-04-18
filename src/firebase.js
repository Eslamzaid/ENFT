// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPg9Z6-ZnPRFpT7I6iqHlssQPq1akiOmA",
  authDomain: "enft-c31a2.firebaseapp.com",
  projectId: "enft-c31a2",
  storageBucket: "enft-c31a2.appspot.com",
  messagingSenderId: "141135167159",
  appId: "1:141135167159:web:377cc3917fda663b39d732",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;

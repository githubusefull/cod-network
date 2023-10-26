// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqV1VS7gJqDAf6luOKJdXnPkA-EH1u8d4",
  authDomain: "cod-network-cba14.firebaseapp.com",
  projectId: "cod-network-cba14",
  storageBucket: "cod-network-cba14.appspot.com",
  messagingSenderId: "928802835353",
  appId: "1:928802835353:web:d640d71c0f4fb8b630e108",
  measurementId: "G-MB075SDPLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
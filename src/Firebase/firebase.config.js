// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFrQvzIA7DDK-FBbAYivllEELw4pFpKJs",
  authDomain: "vaya-fashion.firebaseapp.com",
  projectId: "vaya-fashion",
  storageBucket: "vaya-fashion.appspot.com",
  messagingSenderId: "611554946361",
  appId: "1:611554946361:web:dfacb2a8a9803736498ce8",
  measurementId: "G-QCD8GXWW2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
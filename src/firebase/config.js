// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6iyjgrwSl-mrCbH7QmeW31tHfv5ZttYY",
  authDomain: "react-http-b8415.firebaseapp.com",
  databaseURL: "https://react-http-b8415-default-rtdb.firebaseio.com",
  projectId: "react-http-b8415",
  storageBucket: "react-http-b8415.appspot.com",
  messagingSenderId: "333213916589",
  appId: "1:333213916589:web:3cd25da321cb63dd0a9524",
  measurementId: "G-876V11W5YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
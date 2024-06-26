// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChich8bWPXDZSPfaUDSLXQxy4toRYxNgw",
  authDomain: "oladent-38674.firebaseapp.com",
  projectId: "oladent-38674",
  storageBucket: "oladent-38674.appspot.com",
  messagingSenderId: "251484339417",
  appId: "1:251484339417:web:be7d20b8d386b675b412c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
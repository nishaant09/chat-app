// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDtTCvpjOvcqD92-0Wh-tufhfXrJnqOng",
  authDomain: "chatburst-a540e.firebaseapp.com",
  projectId: "chatburst-a540e",
  storageBucket: "chatburst-a540e.appspot.com",
  messagingSenderId: "444200226295",
  appId: "1:444200226295:web:da770890fa76042fb972f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);
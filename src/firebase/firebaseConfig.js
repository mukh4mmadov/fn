import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEKkFU5zlLoho4Pe9sEUu0zjPkCcUzgnI",
  authDomain: "my-project-d2282.firebaseapp.com",
  projectId: "my-project-d2282",
  storageBucket: "my-project-d2282.appspot.com",
  messagingSenderId: "200777287142",
  appId: "1:200777287142:web:6c9ad672cb222faae1c227",
  measurementId: "G-DN8QXDR1BF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth(app);

//data base
export const db = getFirestore(app);

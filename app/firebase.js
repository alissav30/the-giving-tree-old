// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ6qNAFNSvyFyImdNv2fcwTMI7YO4kZ3k",
  authDomain: "thegivingtree-fa759.firebaseapp.com",
  projectId: "thegivingtree-fa759",
  storageBucket: "thegivingtree-fa759.appspot.com",
  messagingSenderId: "158149705053",
  appId: "1:158149705053:web:a64a4f84abf1712badbcb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const db = getDatabase(app);

//export { db };

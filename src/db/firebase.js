// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDfwH38aK_Om5EC8YcnbhKKsoUOJlisxng",
  authDomain: "test-bizfy.firebaseapp.com",
  projectId: "test-bizfy",
  storageBucket: "test-bizfy.firebasestorage.app",
  messagingSenderId: "636976479434",
  appId: "1:636976479434:web:d04dd4d29603c1bd520833",
  measurementId: "G-PGMC3ET2WY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };



// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDfwH38aK_Om5EC8YcnbhKKsoUOJlisxng",
//   authDomain: "test-bizfy.firebaseapp.com",
//   projectId: "test-bizfy",
//   storageBucket: "test-bizfy.firebasestorage.app",
//   messagingSenderId: "636976479434",
//   appId: "1:636976479434:web:d04dd4d29603c1bd520833",
//   measurementId: "G-PGMC3ET2WY",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
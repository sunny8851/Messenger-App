// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCRge8V7g_L4Vrco14wo4brRZL1dj4YBu8",
//   authDomain: "messenger-cd98f.firebaseapp.com",
//   databaseURL: "https://messenger-cd98f-default-rtdb.firebaseio.com",
//   projectId: "messenger-cd98f",
//   storageBucket: "messenger-cd98f.appspot.com",
//   messagingSenderId: "354329819477",
//   appId: "1:354329819477:web:568cc979faf046235117dc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// npm install -g firebase-tools
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9qwz0AIEjuOKv4Il2yNM2qML_gYerEEE",
  authDomain: "messenger-bfb2b.firebaseapp.com",
  projectId: "messenger-bfb2b",
  storageBucket: "messenger-bfb2b.appspot.com",
  messagingSenderId: "297080311462",
  appId: "1:297080311462:web:911261b15cf563b7fe6e67",
  measurementId: "G-6KR93CN8YF",
});
const db = firebaseApp.firestore();
export default db;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyChS931Yg6K7wD9icUXNjnmM0EnH8FLC7E",
//   authDomain: "messenger-clone-b617b.firebaseapp.com",
//   projectId: "messenger-clone-b617b",
//   storageBucket: "messenger-clone-b617b.appspot.com",
//   messagingSenderId: "1266096844",
//   appId: "1:1266096844:web:a887311146b76623fe4069",
//   measurementId: "${config.measurementId}"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

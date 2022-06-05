// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2dmPYW80-ikqPdh1BVF8gms04CwWuq-k",
  authDomain: "genius-car-services-292c3.firebaseapp.com",
  projectId: "genius-car-services-292c3",
  storageBucket: "genius-car-services-292c3.appspot.com",
  messagingSenderId: "372543369928",
  appId: "1:372543369928:web:4d235c9a960d9018a6abfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
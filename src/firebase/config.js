// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUQPsahVyWbxwWKpkp2unMtj-y8wDhw-o",
  authDomain: "kaiwa-app-e5682.firebaseapp.com",
  projectId: "kaiwa-app-e5682",
  storageBucket: "kaiwa-app-e5682.appspot.com",
  messagingSenderId: "1018360544229",
  appId: "1:1018360544229:web:54336d7ace538ec1018d0c",
  measurementId: "G-18NNBPY9JF"
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
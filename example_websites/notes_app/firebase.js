
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-IYF3Y4B0QMWvqQ6rfN8oGKLNzMm6OA0",
  authDomain: "notesapp-80703.firebaseapp.com",
  projectId: "notesapp-80703",
  storageBucket: "notesapp-80703.appspot.com",
  messagingSenderId: "442146204869",
  appId: "1:442146204869:web:ab9fe66ab7e7e247c314ac",
  measurementId: "G-FC1YMTTSV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
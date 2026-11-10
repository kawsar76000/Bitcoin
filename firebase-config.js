import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXt1EsFGCodU12vGThwuWWTY08dWyJQlk",
  authDomain: "satoshi-ebce7.firebaseapp.com",
  projectId: "satoshi-ebce7",
  storageBucket: "satoshi-ebce7.firebasestorage.app",
  messagingSenderId: "344398063931",
  appId: "1:344398063931:web:560d82266a0213e88aef1e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

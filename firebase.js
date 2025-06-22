// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4gY1q9-0zNEdVwRmqljB2W7laFwKOtqQ",
  authDomain: "x9bet-7eaaf.firebaseapp.com",
  projectId: "x9bet-7eaaf",
  storageBucket: "x9bet-7eaaf.appspot.com",
  messagingSenderId: "809779012789",
  appId: "1:809779012789:web:b7eeb22fbf35af43183426"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

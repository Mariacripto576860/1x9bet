// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// 🔥 Substitua por seus dados reais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgPfr1qs-82Y6c9WZFcq972A_Pa9tz3g4",
  authDomain: "x9bet-7eaaf.firebaseapp.com",
  projectId: "x9bet-7eaaf",
  storageBucket: "x9bet-7eaaf.appspot.com",
  messagingSenderId: "199779028179",
  appId: "1:199779028179:web:b78eeb22ff35af31834326"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

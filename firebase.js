import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4Yq1rs-dENt2bVMImAakVkaDgKfXok0Q",
  authDomain: "x9bet-7eaaf.firebaseapp.com",
  projectId: "x9bet-7eaaf",
  storageBucket: "x9bet-7eaaf.appspot.com",
  messagingSenderId: "849779018799",
  appId: "1:849779018799:web:b7beeb22ff35af43183426"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// dashboard.js
import { auth } from './firebase.js';
import {
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Mostra info do usuário
const userInfo = document.getElementById("user-info");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userInfo.innerHTML = `🎯 Logado como: <strong>${user.email}</strong>`;
  } else {
    // Se não estiver logado, redireciona
    window.location.href = "index.html";
  }
});

window.logout = async function () {
  await signOut(auth);
  window.location.href = "index.html";
};

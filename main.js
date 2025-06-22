// main.js
import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

/**
 * Exibe uma mensagem na tela (campo #message)
 */
function showMessage(msg, color = "red") {
  const msgEl = document.getElementById("message");
  msgEl.textContent = msg;
  msgEl.style.color = color;
}

// Login
window.login = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showMessage("Login realizado com sucesso!", "limegreen");

    // Redirecionar para o menu principal
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } catch (error) {
    showMessage("Erro no login: " + error.message);
  }
};

// Registro
window.register = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    showMessage("Conta criada com sucesso!", "limegreen");
  } catch (error) {
    showMessage("Erro no registro: " + error.message);
  }
};

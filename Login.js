import { auth, db } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    window.location.href = "dashboard.html";
  } catch (error) {
    showModal("Erro no login: " + error.message);
  }
});

document.getElementById("registerBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, senha);

    await setDoc(doc(db, "users", cred.user.uid), {
      uid: cred.user.uid,
      email: cred.user.email,
      createdAt: new Date().toISOString(),
      saldo: 0
    });

    showModal("Usuário registrado com sucesso!");
  } catch (error) {
    showModal("Erro no registro: " + error.message);
  }
});

function showModal(message) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  modalText.innerText = message;
  modal.style.display = "block";
}

window.closeModal = () => {
  document.getElementById("modal").style.display = "none";
};

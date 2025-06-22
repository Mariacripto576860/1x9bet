import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      // Se logar com sucesso, redirecione ou atualize a tela
      console.log("Login bem-sucedido!");
    } catch (error) {
      setErrorMessage("Usuário ou senha inválidos.");
      setShowModal(true);
    }
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Salvar no Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
        uid: user.uid,
        saldo: 0,
      });

      console.log("Registro e salvamento no Firestore bem-sucedido!");
    } catch (error) {
      setErrorMessage("Erro no registro: " + error.message);
      setShowModal(true);
    }
  };

  return (
    <div className="login-container">
      <h1 style={{ color: "orange", textShadow: "0 0 10px red" }}>Bem-vindo à <span style={{ color: "yellow" }}>1x9bet</span></h1>

      <div className="login-box">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Registrar</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>{errorMessage}</p>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

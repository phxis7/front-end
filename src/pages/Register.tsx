import React, { useState } from "react";
import { API_URL } from "../services/api";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, email, cpf, password })
      });

      const data = await response.json();

      setMessage(data.message);

    } catch {
      setMessage("Erro ao cadastrar");
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleRegister}>
        <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
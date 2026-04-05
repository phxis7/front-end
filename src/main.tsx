import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // verifica se já está logado
  useEffect(() => {
    const logged = localStorage.getItem("userLogged");
    if (logged) setUser(JSON.parse(logged));
  }, []);

  // LOGIN
  function handleLogin(e: any) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const found = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (found) {
      localStorage.setItem("userLogged", JSON.stringify(found));
      setUser(found);
    } else {
      alert("Email ou senha inválidos");
    }
  }

  // CADASTRO
  function handleRegister() {
    const email = prompt("Digite seu email");
    const password = prompt("Digite sua senha");

    if (!email || !password) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    users.push({ email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Conta criada!");
  }

  // LOGOUT
  function logout() {
    localStorage.removeItem("userLogged");
    setUser(null);
  }

  // 🔒 SE NÃO ESTIVER LOGADO → LOGIN
  if (!user) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#111",
          color: "#fff",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: 300,
            background: "#222",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h1>Santos Store 🖤🤍</h1>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 10 }}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 10 }}
          />

          <button style={{ padding: 10 }}>Entrar</button>

          <button
            type="button"
            onClick={handleRegister}
            style={{ padding: 10 }}
          >
            Criar conta
          </button>
        </form>
      </div>
    );
  }

  // 🏠 SE ESTIVER LOGADO → SITE
  return (
    <div style={{ padding: 20 }}>
      <h1>Santos Store 🖤🤍</h1>

      <button onClick={logout}>Sair</button>

      <h2>Bem-vindo, {user.email} 👋</h2>

      <p>Aqui entra sua loja (produtos)</p>
    </div>
  );
}

export default App;
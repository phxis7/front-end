import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { toast.error("Preencha todos os campos"); return; }
    login(email, password);
    toast.success("Login realizado com sucesso!");
    navigate("/");
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8">
        <h1 className="text-center font-heading text-3xl font-bold uppercase tracking-wider">Entrar</h1>
        <div className="mx-auto mt-2 h-1 w-12 bg-gradient-gold rounded-full mb-6" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Senha</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="mt-1" />
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-heading uppercase">
            Entrar
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Não tem conta?{" "}
          <Link to="/registro" className="text-accent hover:underline">Criar conta</Link>
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Admin: admin@santos.com (qualquer senha)
        </p>
      </div>
    </div>
  );
};

export default Login;

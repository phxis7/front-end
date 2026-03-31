import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    // Mock login - admin@santos.com is admin
    const isAdmin = email === "admin@santos.com";
    setUser({
      id: crypto.randomUUID(),
      name: isAdmin ? "Admin Santos" : email.split("@")[0],
      email,
      isAdmin,
    });
    return true;
  };

  const register = (name: string, email: string, _password: string) => {
    setUser({ id: crypto.randomUUID(), name, email, isAdmin: false });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

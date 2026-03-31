import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search, LogOut, LayoutDashboard, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/produtos?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-wider text-primary-foreground">
            SANTOS <span className="text-gradient-gold">STORE</span>
          </span>
        </Link>

        {/* Search - desktop */}
        <form onSubmit={handleSearch} className="hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full rounded-md border-0 bg-secondary py-2 pl-10 pr-4 text-sm text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </form>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link to="/produtos">
            <Button variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary/80">
              Produtos
            </Button>
          </Link>

          {user ? (
            <>
              {user.isAdmin && (
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary/80">
                    <LayoutDashboard className="mr-1 h-4 w-4" /> Dashboard
                  </Button>
                </Link>
              )}
              <Button variant="ghost" onClick={logout} className="text-primary-foreground hover:text-accent hover:bg-primary/80">
                <LogOut className="mr-1 h-4 w-4" /> Sair
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary/80">
                <User className="mr-1 h-4 w-4" /> Entrar
              </Button>
            </Link>
          )}

          <Link to="/carrinho" className="relative">
            <Button variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary/80">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground md:hidden">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-primary px-4 pb-4 md:hidden">
          <form onSubmit={handleSearch} className="mb-3">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full rounded-md border-0 bg-secondary py-2 pl-10 pr-4 text-sm text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </form>
          <div className="flex flex-col gap-1">
            <Link to="/produtos" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-primary-foreground">Produtos</Button>
            </Link>
            <Link to="/carrinho" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-primary-foreground">
                Carrinho {itemCount > 0 && `(${itemCount})`}
              </Button>
            </Link>
            {user ? (
              <>
                {user.isAdmin && (
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-primary-foreground">Dashboard</Button>
                  </Link>
                )}
                <Button variant="ghost" onClick={() => { logout(); setMenuOpen(false); }} className="w-full justify-start text-primary-foreground">
                  Sair
                </Button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-primary-foreground">Entrar</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

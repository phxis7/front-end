import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary-foreground">
              SANTOS <span className="text-gradient-gold">STORE</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A loja oficial do Santos Futebol Clube. Produtos licenciados com qualidade premium.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/produtos" className="text-muted-foreground hover:text-accent transition-colors">Produtos</Link></li>
              <li><Link to="/carrinho" className="text-muted-foreground hover:text-accent transition-colors">Carrinho</Link></li>
              <li><Link to="/login" className="text-muted-foreground hover:text-accent transition-colors">Minha Conta</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>contato@santosstore.com.br</li>
              <li>(13) 3333-3333</li>
              <li>Vila Belmiro, Santos - SP</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2024 Santos Store. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

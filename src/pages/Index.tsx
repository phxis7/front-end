import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          src={heroBanner}
          alt="Santos Store Hero"
          width={1920}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold uppercase tracking-wider text-primary-foreground md:text-7xl">
            Loja do <span className="text-gradient-gold">Santos</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Vista a camisa do Peixe. Produtos oficiais e licenciados com a qualidade que você merece.
          </p>
          <Link to="/produtos" className="mt-8 inline-block">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-heading text-lg uppercase tracking-wide">
              Ver Produtos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider">
            Destaques
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-gradient-gold rounded-full" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/produtos">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading uppercase tracking-wide">
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-primary-foreground md:text-4xl">
            Edição Especial <span className="text-gradient-gold">Pelé</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Homenageie o Rei do Futebol com nossa coleção exclusiva retrô.
          </p>
          <Link to="/produtos" className="mt-6 inline-block">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-heading uppercase">
              Confira
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

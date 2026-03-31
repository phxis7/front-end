import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState(queryParam);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = category === "Todos" || p.category === category;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [category, search]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wider">Produtos</h1>
      <div className="mx-auto mt-2 h-1 w-16 bg-gradient-gold rounded-full mb-8" />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(cat)}
            className={
              category === cat
                ? "bg-accent text-accent-foreground hover:bg-gold-dark font-heading uppercase"
                : "border-border text-foreground hover:border-accent hover:text-accent font-heading uppercase"
            }
          >
            {cat}
          </Button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-20">Nenhum produto encontrado.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

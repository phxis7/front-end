import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, product.sizes?.[1]);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:shadow-accent/10 animate-fade-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {product.category}
        </span>
        <h3 className="mt-1 font-heading text-lg font-semibold text-card-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-accent">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          <Button
            size="sm"
            onClick={handleAdd}
            className="bg-accent text-accent-foreground hover:bg-gold-dark"
          >
            <ShoppingCart className="mr-1 h-4 w-4" /> Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}

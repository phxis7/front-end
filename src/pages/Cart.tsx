import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground" />
        <h1 className="mt-4 font-heading text-2xl font-bold">Seu carrinho está vazio</h1>
        <p className="mt-2 text-muted-foreground">Adicione produtos para continuar.</p>
        <Link to="/produtos" className="mt-6">
          <Button className="bg-accent text-accent-foreground hover:bg-gold-dark font-heading uppercase">
            Ver Produtos
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wider">Carrinho</h1>
      <div className="mx-auto mt-2 h-1 w-16 bg-gradient-gold rounded-full mb-8" />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 rounded-lg border border-border bg-card p-4">
              <img src={item.product.image} alt={item.product.name} className="h-24 w-24 rounded-md object-cover" loading="lazy" width={96} height={96} />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-card-foreground">{item.product.name}</h3>
                  {item.size && <span className="text-xs text-muted-foreground">Tamanho: {item.size}</span>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="rounded border border-border p-1 hover:border-accent">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="rounded border border-border p-1 hover:border-accent">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-heading font-bold text-accent">
                    R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                  </span>
                  <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="font-heading text-xl font-bold">Resumo</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>R$ {total.toFixed(2).replace(".", ",")}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Frete</span><span className="text-accent">Grátis</span></div>
          </div>
          <div className="mt-4 border-t border-border pt-4 flex justify-between font-heading text-lg font-bold">
            <span>Total</span>
            <span className="text-accent">R$ {total.toFixed(2).replace(".", ",")}</span>
          </div>
          <Button
            className="mt-6 w-full bg-accent text-accent-foreground hover:bg-gold-dark font-heading uppercase"
            onClick={() => { clearCart(); toast.success("Pedido realizado com sucesso!"); }}
          >
            Finalizar Compra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

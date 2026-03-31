import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Package, Users, DollarSign, TrendingUp } from "lucide-react";
import { products } from "@/data/products";

const stats = [
  { label: "Produtos", value: products.length.toString(), icon: Package, change: "+2 este mês" },
  { label: "Clientes", value: "1.234", icon: Users, change: "+12% este mês" },
  { label: "Receita", value: "R$ 45.890", icon: DollarSign, change: "+8% este mês" },
  { label: "Vendas", value: "342", icon: TrendingUp, change: "+15% este mês" },
];

const recentOrders = [
  { id: "#001", customer: "João Silva", product: "Camisa Santos I 2024", total: "R$ 299,90", status: "Entregue" },
  { id: "#002", customer: "Maria Souza", product: "Jaqueta Santos Premium", total: "R$ 449,90", status: "Enviado" },
  { id: "#003", customer: "Pedro Santos", product: "Boné Santos Dourado", total: "R$ 89,90", status: "Pendente" },
  { id: "#004", customer: "Ana Costa", product: "Camisa Retro Pelé 10", total: "R$ 349,90", status: "Entregue" },
  { id: "#005", customer: "Lucas Oliveira", product: "Bola Santos FC", total: "R$ 159,90", status: "Enviado" },
];

const Dashboard = () => {
  const { user } = useAuth();

  if (!user || !user.isAdmin) return <Navigate to="/" replace />;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wider">Dashboard</h1>
      <div className="mx-auto mt-2 h-1 w-16 bg-gradient-gold rounded-full mb-8" />

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <stat.icon className="h-5 w-5 text-accent" />
            </div>
            <p className="mt-2 font-heading text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-accent">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div className="mt-10">
        <h2 className="font-heading text-xl font-bold uppercase mb-4">Pedidos Recentes</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-heading font-semibold uppercase text-muted-foreground">Pedido</th>
                <th className="px-4 py-3 text-left font-heading font-semibold uppercase text-muted-foreground">Cliente</th>
                <th className="px-4 py-3 text-left font-heading font-semibold uppercase text-muted-foreground">Produto</th>
                <th className="px-4 py-3 text-left font-heading font-semibold uppercase text-muted-foreground">Total</th>
                <th className="px-4 py-3 text-left font-heading font-semibold uppercase text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.product}</td>
                  <td className="px-4 py-3 font-heading font-semibold text-accent">{order.total}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      order.status === "Entregue" ? "bg-green-100 text-green-800" :
                      order.status === "Enviado" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

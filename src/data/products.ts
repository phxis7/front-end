export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Camisa Santos I 2024",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1580089595767-98745d7025c5?w=400&h=400&fit=crop",
    category: "Camisas",
    description: "Camisa oficial do Santos FC temporada 2024. Listrada em preto e branco.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "2",
    name: "Camisa Santos II 2024",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=400&h=400&fit=crop",
    category: "Camisas",
    description: "Camisa reserva do Santos FC temporada 2024.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "3",
    name: "Shorts Santos Treino",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    category: "Shorts",
    description: "Shorts de treino oficial do Santos FC.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "4",
    name: "Boné Santos Dourado",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=400&fit=crop",
    category: "Acessórios",
    description: "Boné oficial Santos FC edição especial dourada.",
  },
  {
    id: "5",
    name: "Jaqueta Santos Premium",
    price: 449.90,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Agasalhos",
    description: "Jaqueta premium Santos FC com detalhes dourados.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "6",
    name: "Meião Santos Oficial",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop",
    category: "Acessórios",
    description: "Meião oficial para jogos do Santos FC.",
    sizes: ["37-40", "41-44"],
  },
  {
    id: "7",
    name: "Camisa Retro Pelé 10",
    price: 349.90,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=400&fit=crop",
    category: "Camisas",
    description: "Camisa retrô homenagem ao Rei Pelé. Edição limitada.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "8",
    name: "Bola Santos FC",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400&h=400&fit=crop",
    category: "Acessórios",
    description: "Bola oficial Santos FC para campo.",
  },
];

export const categories = ["Todos", "Camisas", "Shorts", "Agasalhos", "Acessórios"];

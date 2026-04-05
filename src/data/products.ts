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
    image: "/images/camisa-santos-principal.webp",
    category: "Camisas",
    description: "Camisa oficial do Santos FC temporada 2024.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "2",
    name: "Camisa Santos II 2024",
    price: 299.90,
    image: "/images/camisa-santos-reserva.png", // ainda falta imagem
    category: "Camisas",
    description: "Camisa reserva do Santos FC temporada 2024.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "3",
    name: "Shorts Santos Treino",
    price: 129.90,
    image: "/images/shorts-santos.png", // ainda falta imagem
    category: "Shorts",
    description: "Shorts de treino oficial do Santos FC.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "4",
    name: "Boné Santos Dourado",
    price: 89.90,
    image: "/images/bone-santos-preto.webp",
    category: "Acessórios",
    description: "Boné oficial Santos FC edição especial.",
  },
  {
    id: "5",
    name: "Jaqueta Santos Premium",
    price: 449.90,
    image: "/images/jaqueta-santos.png", // falta imagem
    category: "Agasalhos",
    description: "Jaqueta premium Santos FC com detalhes dourados.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "6",
    name: "Meião Santos Oficial",
    price: 49.90,
    image: "/images/meiao-santos.png", // falta imagem
    category: "Acessórios",
    description: "Meião oficial para jogos do Santos FC.",
    sizes: ["37-40", "41-44"],
  },
  {
    id: "7",
    name: "Camisa Retro Pelé 10",
    price: 349.90,
    image: "/images/camisa-retro-pele.png", // falta imagem
    category: "Camisas",
    description: "Camisa retrô homenagem ao Rei Pelé.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "8",
    name: "Bola Santos FC",
    price: 159.90,
    image: "/images/bola-santos.png", // falta imagem
    category: "Acessórios",
    description: "Bola oficial Santos FC para campo.",
  },
];

export const categories = ["Todos", "Camisas", "Shorts", "Agasalhos", "Acessórios"];

export interface Item {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  price: number;
  category: string;
  stock: number;
}

export const items: Item[] = [];

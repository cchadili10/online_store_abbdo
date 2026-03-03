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

export const items: Item[] = [
  {
    "id": 1,
    "name": "test",
    "description": "Premium noise-cancelling wireless headphones with 30-hour battery life.",
    "fullDescription": "this is working",
    "image": "/uploads/1772521531853-WhatsApp_Image_2026-03-02_at_5.24.54_AM-Photoroom.png",
    "price": 199.99,
    "category": "Electronics",
    "stock": 45
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "description": "Fitness tracking smartwatch with heart rate monitor and GPS.",
    "fullDescription": "Stay connected and track your fitness goals with our advanced smartwatch. Features include heart rate monitoring, GPS tracking, sleep analysis, and smartphone notifications. Water-resistant up to 50 meters, making it perfect for swimmers. Battery lasts up to 7 days on a single charge.",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    "price": 299.99,
    "category": "Electronics",
    "stock": 32
  },
  {
    "id": 3,
    "name": "Leather Backpack",
    "description": "Stylish genuine leather backpack perfect for work and travel.",
    "fullDescription": "Crafted from premium genuine leather, this backpack combines style and functionality. Multiple compartments keep your laptop, documents, and personal items organized. Padded straps ensure comfort during long commutes. Water-resistant coating protects your belongings in any weather.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    "price": 149.99,
    "category": "Fashion",
    "stock": 28
  },
  {
    "id": 4,
    "name": "Coffee Maker",
    "description": "Programmable coffee maker with thermal carafe and auto-brew feature.",
    "fullDescription": "Wake up to freshly brewed coffee every morning with our programmable coffee maker. Features a 12-cup thermal carafe that keeps coffee hot for hours, adjustable brew strength, and auto-shutoff for safety. The pause-and-serve function lets you grab a cup mid-brew.",
    "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    "price": 89.99,
    "category": "Home & Kitchen",
    "stock": 67
  },
  {
    "id": 5,
    "name": "Running Shoes",
    "description": "Lightweight running shoes with advanced cushioning technology.",
    "fullDescription": "Engineered for performance, these running shoes feature advanced cushioning technology that absorbs impact and returns energy with every step. Breathable mesh upper keeps feet cool, while the durable rubber outsole provides excellent traction. Perfect for both casual joggers and serious runners.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    "price": 129.99,
    "category": "Sports",
    "stock": 53
  },
  {
    "id": 6,
    "name": "Desk Lamp",
    "description": "Modern LED desk lamp with adjustable brightness and color temperature.",
    "fullDescription": "Illuminate your workspace with our sleek LED desk lamp. Features multiple brightness levels and adjustable color temperature (3000K-6000K) to reduce eye strain. Touch controls make it easy to adjust, and the flexible arm allows you to direct light exactly where you need it. Energy-efficient LED lasts up to 50,000 hours.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    "price": 59.99,
    "category": "Home & Office",
    "stock": 41
  },
  {
    "name": "ring",
    "description": "tete",
    "fullDescription": "ufywuy sfyousfy",
    "image": "/uploads/1772520809897-TEST02.jpeg",
    "price": 20,
    "category": "ring",
    "stock": 20,
    "id": 7
  }
];

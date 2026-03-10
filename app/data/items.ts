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
    "name": "Wireless Headphones",
    "description": "Premium noise-canceling wireless headphones with superior sound quality",
    "fullDescription": "Experience premium audio with our state-of-the-art wireless headphones. Features active noise cancellation, 30-hour battery life, comfortable over-ear design, and crystal-clear sound quality. Perfect for music lovers, travelers, and professionals.",
    "image": "https://scontent.frak2-2.fna.fbcdn.net/v/t39.30808-6/649856657_122098393743137537_7672294819857507147_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dzQD57q0o7gQ7kNvwFKE7jx&_nc_oc=AdmJnMUcu7t3dQz5P0G2OTGvqbRqjLa0SLild8lr0KMtVaZGQPGg_OLkyUuN4ncP6W8&_nc_zt=23&_nc_ht=scontent.frak2-2.fna&_nc_gid=9FuO3zOv1iKimE6BkQbo8Q&_nc_ss=8&oh=00_Afxq9by0ftyLm3kk5XG6irFR9INDKPimTbGXMb2dAqbwNg&oe=69B52ABC",
    "price": 149.99,
    "category": "Electronics",
    "stock": 25
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "description": "Advanced fitness tracking smartwatch with heart rate monitor",
    "fullDescription": "Stay connected and healthy with our advanced smartwatch. Track your workouts, monitor your heart rate, receive notifications, and enjoy a sleek design. Water-resistant with 7-day battery life and customizable watch faces.",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    "price": 299.99,
    "category": "Electronics",
    "stock": 15
  },
  {
    "id": 3,
    "name": "Leather Backpack",
    "description": "Stylish genuine leather backpack for everyday use",
    "fullDescription": "Crafted from premium genuine leather, this backpack combines style and functionality. Features multiple compartments, padded laptop sleeve, adjustable straps, and durable construction. Perfect for work, travel, or casual outings.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    "price": 89.99,
    "category": "Fashion",
    "stock": 30
  },
  {
    "id": 4,
    "name": "Coffee Maker",
    "description": "Professional-grade coffee maker for perfect brew every time",
    "fullDescription": "Start your day right with our professional coffee maker. Features programmable timer, multiple brew strength settings, thermal carafe, and automatic shut-off. Brews up to 12 cups and keeps coffee hot for hours.",
    "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80",
    "price": 79.99,
    "category": "Home",
    "stock": 20
  },
  {
    "id": 5,
    "name": "Yoga Mat",
    "description": "Non-slip premium yoga mat with carrying strap",
    "fullDescription": "Enhance your yoga practice with our premium non-slip yoga mat. Made from eco-friendly materials, provides excellent cushioning and grip. Includes carrying strap for easy transport. Perfect for yoga, pilates, and floor exercises.",
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80",
    "price": 34.99,
    "category": "Sports",
    "stock": 50
  },
  {
    "id": 6,
    "name": "Desk Lamp",
    "description": "Modern LED desk lamp with adjustable brightness",
    "fullDescription": "Illuminate your workspace with our modern LED desk lamp. Features adjustable brightness levels, flexible arm, energy-efficient LED bulbs, and sleek minimalist design. Perfect for reading, working, or studying.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    "price": 45.99,
    "category": "Home",
    "stock": 40
  },
  {
    "id": 7,
    "name": "Running Shoes",
    "description": "Lightweight running shoes with maximum comfort and support",
    "fullDescription": "Take your running to the next level with our lightweight performance shoes. Features responsive cushioning, breathable mesh upper, durable outsole, and ergonomic design. Suitable for all types of runners and distances.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    "price": 119.99,
    "category": "Sports",
    "stock": 35
  },
  {
    "id": 8,
    "name": "Bluetooth Speaker",
    "description": "Portable waterproof bluetooth speaker with powerful sound",
    "fullDescription": "Take your music anywhere with our portable bluetooth speaker. Features 360-degree sound, waterproof design, 12-hour battery life, and easy connectivity. Perfect for beach trips, parties, or outdoor adventures.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    "price": 69.99,
    "category": "Electronics",
    "stock": 45
  },
  {
    "id": 9,
    "name": "Sunglasses",
    "description": "Classic polarized sunglasses with UV protection",
    "fullDescription": "Protect your eyes in style with our classic polarized sunglasses. Features 100% UV protection, scratch-resistant lenses, lightweight frame, and timeless design. Comes with protective case and cleaning cloth.",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    "price": 59.99,
    "category": "Fashion",
    "stock": 60
  },
  {
    "id": 10,
    "name": "ring",
    "description": "ring ",
    "fullDescription": "hajhas",
    "image": "https://scontent.frak2-2.fna.fbcdn.net/v/t39.30808-6/649889287_122098393701137537_2974220910716445235_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-Km2fw8W8SkQ7kNvwHaTPvG&_nc_oc=AdkwyxCF9QTPDRzHT3pMPb4wNx3TTBkQIXn3fZpuEaZ-iMLDU6STIsXB6V5lpJuDLs8&_nc_zt=23&_nc_ht=scontent.frak2-2.fna&_nc_gid=Qp0_hS2UQhvuHHrrhI50lQ&_nc_ss=8&oh=00_AfzxEMlxgEwOqtda-rEzBywsYSB7coIw7juqD2SWhlHGXQ&oe=69B5334E",
    "price": 29,
    "category": "hh",
    "stock": 88
  }
];

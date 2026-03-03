import Navbar from './components/Navbar';
import ItemCard from './components/ItemCard';
import { items } from './data/items';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to ANAQA Store
          </h1>
          <p className="text-xl text-gray-600">
            Discover our amazing products at great prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

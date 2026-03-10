'use client';

import Navbar from './Navbar';
import ItemCard from './ItemCard';
import { items } from '@/app/data/items';
import { useLanguage } from '@/app/providers/LanguageProvider';

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('welcome')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('discoverProducts')}
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

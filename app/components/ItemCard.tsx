'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/providers/LanguageProvider';

interface ItemCardProps {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

export default function ItemCard({ id, name, description, image, price }: ItemCardProps) {
    const { t } = useLanguage();

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full bg-gray-200">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-500">${price}</span>
                    <Link
                        href={`/item/${id}`}
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                        {t('view')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

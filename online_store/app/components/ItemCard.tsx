import Link from 'next/link';
import Image from 'next/image';

interface ItemCardProps {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

export default function ItemCard({ id, name, description, image, price }: ItemCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full bg-gray-200">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
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
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}

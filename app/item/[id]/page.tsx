import { notFound } from 'next/navigation';
import ItemDetail from '@/app/components/ItemDetail';
import { items } from '@/app/data/items';

interface ItemPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ItemPage({ params }: ItemPageProps) {
    const { id } = await params;
    const item = items.find((item) => item.id === parseInt(id));

    if (!item) {
        notFound();
    }

    return <ItemDetail item={item} />;
}

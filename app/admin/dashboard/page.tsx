'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/app/providers/LanguageProvider';

interface Item {
    id: number;
    name: string;
    description: string;
    fullDescription: string;
    image: string;
    price: number;
    category: string;
    stock: number;
}

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        fullDescription: '',
        image: '',
        price: '',
        category: '',
        stock: '',
    });

    useEffect(() => {
        const auth = localStorage.getItem('adminAuth');
        if (auth !== 'true') {
            router.push('/admin/login');
        } else {
            setIsAuthenticated(true);
            fetchItems();
        }
    }, [router]);

    const fetchItems = async () => {
        try {
            const response = await fetch('/api/items');
            const data = await response.json();
            if (data.items) {
                setItems(data.items);
            }
        } catch (err) {
            console.error('Error fetching items:', err);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const itemData = {
                name: formData.name,
                description: formData.description,
                fullDescription: formData.fullDescription,
                image: formData.image,
                price: parseFloat(formData.price),
                category: formData.category,
                stock: parseInt(formData.stock),
            };

            const response = await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(t('itemAddedSuccessfully'));
                setFormData({
                    name: '',
                    description: '',
                    fullDescription: '',
                    image: '',
                    price: '',
                    category: '',
                    stock: '',
                });
                fetchItems();
                setTimeout(() => setSuccess(''), 3000);
            } else {
                setError(data.error || t('failedToAddItem'));
            }
        } catch (err) {
            setError(t('errorOccurred'));
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        router.push('/admin/login');
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-orange-500 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">{t('adminDashboard')}</h1>
                        <div className="flex gap-4">
                            <Link
                                href="/"
                                className="bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                            >
                                {t('viewStore')}
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                            >
                                {t('logout')}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Add Item Form */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('addNewItem')}</h2>

                        {success && (
                            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mb-4">
                                {success}
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('productName')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder={t('exampleHeadphones')}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('shortDescription')}
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder={t('briefDescription')}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('fullDescription')}
                                </label>
                                <textarea
                                    name="fullDescription"
                                    value={formData.fullDescription}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder={t('detailedDescription')}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('imageUrl')}
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder={t('imageUrlPlaceholder')}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('price')}
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                        step="0.01"
                                        min="0"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                        placeholder="99.99"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('stock')}
                                    </label>
                                    <input
                                        type="number"
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                        placeholder="10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('categoryField')}
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder={t('exampleCategory')}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? t('adding') : t('addItem')}
                            </button>
                        </form>
                    </div>

                    {/* Items List */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t('currentItems')} ({items.length})
                        </h2>
                        <div className="space-y-4 max-h-[600px] overflow-y-auto">
                            {items.map((item) => (
                                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                                    <div className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">{item.name}</h3>
                                            <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-orange-500 font-bold">${item.price}</span>
                                                <span className="text-sm text-gray-500">Stock: {item.stock}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

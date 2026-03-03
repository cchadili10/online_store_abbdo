'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Item } from '@/app/data/items';

export default function AdminDashboard() {
    const [items, setItems] = useState<Item[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingItem, setEditingItem] = useState<Item | null>(null);
    const [formData, setFormData] = useState<Partial<Item>>({
        name: '',
        description: '',
        fullDescription: '',
        image: '',
        price: 0,
        category: '',
        stock: 0,
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const auth = sessionStorage.getItem('adminAuth');
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
            setItems(data);
        } catch (error) {
            console.error('Failed to fetch items:', error);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('adminAuth');
        router.push('/admin/login');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = async (): Promise<string | null> => {
        if (!imageFile) return formData.image || null;

        setIsUploading(true);
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('file', imageFile);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: uploadFormData,
            });

            if (response.ok) {
                const data = await response.json();
                return data.imageUrl;
            } else {
                const error = await response.json();
                alert(error.error || 'Failed to upload image');
                return null;
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Failed to upload image');
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Upload image first if a new one is selected
            let imageUrl = formData.image;
            if (imageFile) {
                const uploadedUrl = await uploadImage();
                if (!uploadedUrl) {
                    return; // Stop if upload failed
                }
                imageUrl = uploadedUrl;
            }

            const itemData = { ...formData, image: imageUrl };

            if (editingItem) {
                // Update existing item
                const response = await fetch('/api/items', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...itemData, id: editingItem.id }),
                });

                if (response.ok) {
                    fetchItems();
                    resetForm();
                }
            } else {
                // Create new item
                const response = await fetch('/api/items', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(itemData),
                });

                if (response.ok) {
                    fetchItems();
                    resetForm();
                }
            }
        } catch (error) {
            console.error('Failed to save item:', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm('Are you sure you want to delete this item?')) {
            try {
                const response = await fetch(`/api/items?id=${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    fetchItems();
                }
            } catch (error) {
                console.error('Failed to delete item:', error);
            }
        }
    };

    const handleEdit = (item: Item) => {
        setEditingItem(item);
        setFormData(item);
        setImagePreview(item.image);
        setImageFile(null);
        setShowForm(true);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            description: '',
            fullDescription: '',
            image: '',
            price: 0,
            category: '',
            stock: 0,
        });
        setImageFile(null);
        setImagePreview('');
        setEditingItem(null);
        setShowForm(false);
    };

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-orange-500 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Admin Dashboard - Store Online</h1>
                        <div className="flex gap-4">
                            <a href="/" className="hover:text-orange-100 transition-colors">
                                View Store
                            </a>
                            <button onClick={handleLogout} className="hover:text-orange-100 transition-colors">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Add/Edit Form */}
                <div className="mb-8">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-bold"
                    >
                        {showForm ? 'Cancel' : '+ Add New Item'}
                    </button>

                    {showForm && (
                        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                {editingItem ? 'Edit Item' : 'Add New Item'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={formData.price || ''}
                                            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Stock
                                        </label>
                                        <input
                                            type="number"
                                            value={formData.stock || ''}
                                            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Product Image
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                                        required={!editingItem && !formData.image}
                                    />
                                    <p className="text-sm text-gray-500 mt-1">Upload an image (max 5MB, JPG/PNG/GIF/WEBP)</p>

                                    {imagePreview && (
                                        <div className="mt-4">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-48 h-48 object-cover rounded-lg border-2 border-gray-300"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Short Description
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                                        rows={2}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Description
                                    </label>
                                    <textarea
                                        value={formData.fullDescription}
                                        onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                                        rows={4}
                                        required
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="submit"
                                        disabled={isUploading}
                                        className="bg-orange-500 text-white px-8 py-2 rounded-lg hover:bg-orange-600 transition-colors font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        {isUploading ? 'Uploading...' : editingItem ? 'Update Item' : 'Add Item'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        disabled={isUploading}
                                        className="bg-gray-300 text-gray-700 px-8 py-2 rounded-lg hover:bg-gray-400 transition-colors font-bold disabled:cursor-not-allowed"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                {/* Items List */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-4 bg-gray-100 border-b">
                        <h2 className="text-xl font-bold text-gray-800">All Items ({items.length})</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {items.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-900">{item.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                                        <td className="px-6 py-4 text-sm text-orange-600 font-bold">${item.price}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.stock}</td>
                                        <td className="px-6 py-4 text-sm space-x-2">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="text-blue-600 hover:text-blue-800 font-medium"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="text-red-600 hover:text-red-800 font-medium"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { NextRequest, NextResponse } from 'next/server';
import { Item, items as dataItems } from '@/app/data/items';

// In-memory storage (resets on each serverless function invocation)
// For production, use a database like Vercel Postgres, MongoDB, or Supabase
let itemsCache: Item[] = [...dataItems];

// Helper function to get items
function getItems(): Item[] {
    return itemsCache;
}

// Helper function to save items (in-memory only)
function writeItems(items: Item[]) {
    itemsCache = items;
}

// GET all items
export async function GET() {
    try {
        const items = getItems();
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to get items' }, { status: 500 });
    }
}

// POST new item
export async function POST(request: NextRequest) {
    try {
        const newItem = await request.json();
        const items = getItems();

        // Generate new ID
        const maxId = items.length > 0 ? Math.max(...items.map(item => item.id)) : 0;
        newItem.id = maxId + 1;

        items.push(newItem);
        writeItems(items);

        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
    }
}

// PUT update item
export async function PUT(request: NextRequest) {
    try {
        const updatedItem: Item = await request.json();
        const items = getItems();

        const index = items.findIndex(item => item.id === updatedItem.id);
        if (index === -1) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }

        items[index] = updatedItem;
        writeItems(items);

        return NextResponse.json(updatedItem);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
    }
}

// DELETE item
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = parseInt(searchParams.get('id') || '0');

        const items = getItems();
        const filteredItems = items.filter(item => item.id !== id);

        if (items.length === filteredItems.length) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }

        writeItems(filteredItems);

        return NextResponse.json({ message: 'Item deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
    }
}

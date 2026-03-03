import { NextRequest, NextResponse } from 'next/server';
import { Item } from '@/app/data/items';
import fs from 'fs';
import path from 'path';

const itemsFilePath = path.join(process.cwd(), 'app', 'data', 'items.ts');

// Helper function to read items from file
function getItems(): Item[] {
    const fileContent = fs.readFileSync(itemsFilePath, 'utf-8');
    const itemsMatch = fileContent.match(/export const items: Item\[\] = (\[[\s\S]*?\]);/);
    if (itemsMatch) {
        // Parse the array from the file
        const itemsString = itemsMatch[1];
        return eval(itemsString);
    }
    return [];
}

// Helper function to write items to file
function writeItems(items: Item[]) {
    const fileContent = `export interface Item {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  price: number;
  category: string;
  stock: number;
}

export const items: Item[] = ${JSON.stringify(items, null, 2)};
`;
    fs.writeFileSync(itemsFilePath, fileContent, 'utf-8');
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

import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const newItem = await request.json();
        
        // Read the current items file
        const filePath = path.join(process.cwd(), 'app/data/items.ts');
        const fileContent = await readFile(filePath, 'utf-8');
        
        // Extract the items array from the file
        const itemsMatch = fileContent.match(/export const items: Item\[\] = (\[[\s\S]*?\]);/);
        
        if (!itemsMatch) {
            return NextResponse.json({ error: 'Could not parse items file' }, { status: 500 });
        }
        
        // Parse existing items
        const itemsArrayString = itemsMatch[1];
        const items = eval(itemsArrayString); // Using eval for simplicity - in production use a proper parser
        
        // Generate new ID
        const newId = items.length > 0 ? Math.max(...items.map((item: any) => item.id)) + 1 : 1;
        
        // Add new item
        const itemToAdd = {
            id: newId,
            ...newItem
        };
        
        items.push(itemToAdd);
        
        // Generate new file content
        const newItemsArray = JSON.stringify(items, null, 2);
        const newFileContent = fileContent.replace(
            /export const items: Item\[\] = \[[\s\S]*?\];/,
            `export const items: Item[] = ${newItemsArray};`
        );
        
        // Write back to file
        await writeFile(filePath, newFileContent, 'utf-8');
        
        return NextResponse.json({ success: true, item: itemToAdd });
    } catch (error) {
        console.error('Error adding item:', error);
        return NextResponse.json(
            { error: 'Failed to add item' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'app/data/items.ts');
        const fileContent = await readFile(filePath, 'utf-8');
        
        const itemsMatch = fileContent.match(/export const items: Item\[\] = (\[[\s\S]*?\]);/);
        
        if (!itemsMatch) {
            return NextResponse.json({ error: 'Could not parse items file' }, { status: 500 });
        }
        
        const items = eval(itemsMatch[1]);
        
        return NextResponse.json({ items });
    } catch (error) {
        console.error('Error reading items:', error);
        return NextResponse.json(
            { error: 'Failed to read items' },
            { status: 500 }
        );
    }
}

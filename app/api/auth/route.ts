import { NextResponse } from 'next/server';

const ADMIN_USERNAME = 'abdo';
const ADMIN_PASSWORD = 'abdo@2020';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            return NextResponse.json({ success: true, message: 'Authentication successful' });
        } else {
            return NextResponse.json(
                { error: 'Invalid username or password' },
                { status: 401 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}

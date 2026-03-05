import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        // Validate file type
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            return NextResponse.json({ error: 'Invalid file type. Only images are allowed.' }, { status: 400 });
        }

        // Validate file size (max 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            return NextResponse.json({ error: 'File size too large. Maximum 5MB allowed.' }, { status: 400 });
        }

        // For Vercel deployment, you need to use cloud storage like:
        // - Vercel Blob: https://vercel.com/docs/storage/vercel-blob
        // - Cloudinary: https://cloudinary.com
        // - AWS S3: https://aws.amazon.com/s3/
        // 
        // This temporary implementation returns an error
        // See documentation for implementing proper cloud storage

        return NextResponse.json(
            {
                error: 'File uploads require cloud storage configuration. Please configure Vercel Blob, Cloudinary, or AWS S3.',
                note: 'Local file system uploads do not work on Vercel serverless functions.'
            },
            { status: 501 }
        );

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
    }
}

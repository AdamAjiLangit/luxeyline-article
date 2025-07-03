import { NextResponse } from 'next/server';
import { articles } from '@/lib/store';
import { slugify } from '@/lib/utils';

export async function GET() {
    return NextResponse.json({ data: articles });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, description, thumbnail, category, author, fullContent } = body;

        if (!title || !description || !thumbnail || !category || !author || !fullContent) {
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }

        const newArticle = {
            id: articles.length + 1,
            title,
            slug: slugify(title),
            description,
            thumbnail,
            category,
            author,
            fullContent,
            createdAt: new Date().toISOString(),
        };

        articles.push(newArticle);

        return NextResponse.json({ message: 'Article created', data: newArticle }, { status: 201 });
    } catch (error) {
        console.error('POST /api/articles error:', error);
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}

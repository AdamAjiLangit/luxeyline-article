import { NextResponse } from 'next/server';
import { articles } from '@/lib/store';

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const idNumber = Number(id);

    const article = articles.find((a) => a.id === idNumber);

    if (!article) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ data: article });
}

export async function PUT(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const idNumber = Number(id);

    const body = await req.json();

    const index = articles.findIndex((a) => a.id === idNumber);
    if (index === -1) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    const { title, description, thumbnail, category, author, fullContent } = body;

    if (!title || !description || !thumbnail || !category || !author || !fullContent) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const slug = title.toLowerCase().replace(/\s+/g, '-');

    const updated = {
        ...articles[index],
        title,
        description,
        thumbnail,
        category,
        author,
        fullContent,
        slug,
    };

    articles[index] = updated;

    return NextResponse.json({ message: 'Article updated', data: updated });
}

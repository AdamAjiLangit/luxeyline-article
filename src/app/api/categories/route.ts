import { NextResponse } from 'next/server';
import { categories } from '@/lib/store';

export async function GET() {
    return NextResponse.json({ data: categories });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json({ error: 'Category name is required.' }, { status: 400 });
        }

        const newCategory = {
            id: categories.length + 1,
            name,
        };

        categories.push(newCategory);

        return NextResponse.json({ message: 'Category created', data: newCategory }, { status: 201 });
    } catch (error) {
        console.error('POST /api/categories error:', error);
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}

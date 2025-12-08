import { NextResponse } from 'next/server';
import { categories } from '@/lib/store';

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const idNumber = Number(id);

    const category = categories.find((c) => c.id === idNumber);
    if (!category) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: category });
}

export async function PUT(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const idNumber = Number(id);

    const body = await req.json();

    const index = categories.findIndex((c) => c.id === idNumber);
    if (index === -1) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    if (!body.name) {
        return NextResponse.json({ error: 'Missing name field' }, { status: 400 });
    }

    categories[index].name = body.name;

    return NextResponse.json({ message: 'Category updated', data: categories[index] });
}

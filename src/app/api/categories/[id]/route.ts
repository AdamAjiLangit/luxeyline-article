import { NextResponse } from 'next/server';
import { categories } from '@/lib/store';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const category = categories.find((c) => c.id === Number(id));
    if (!category) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ data: category });
}

// PUT untuk update
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await req.json();
    const categoryIndex = categories.findIndex((c) => c.id === Number(id));
    if (categoryIndex === -1) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    categories[categoryIndex].name = body.name;
    return NextResponse.json({ data: categories[categoryIndex] });
}

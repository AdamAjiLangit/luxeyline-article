import { users } from '@/lib/store';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { email, password } = await req.json();

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const { id, role, nama_pengguna } = user;
    return NextResponse.json({ id, email, role, nama_pengguna });
}

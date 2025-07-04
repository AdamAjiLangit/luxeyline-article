import { NextResponse } from 'next/server';
import { users } from '@/lib/store';

export async function POST(req: Request) {
    const body = await req.json();
    const { nama_pengguna, email, password } = body;

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return NextResponse.json({ error: 'Email already registered' }, { status: 422 });
    }

    const newUser = {
        id: Date.now(),
        nama_pengguna,
        email,
        password,
        role: 'user',
    };

    users.push(newUser);

    return NextResponse.json({ message: 'User registered successfully' });
}

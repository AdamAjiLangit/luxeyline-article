import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { users } from '@/lib/store';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const user = users.find(
                    (u) =>
                        u.email === credentials?.email &&
                        u.password === credentials?.password
                );

                if (!user) return null;

                return {
                    id: String(user.id),
                    email: user.email,
                    role: user.role,
                    nama_pengguna: user.nama_pengguna,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = String(user.id);
                token.email = user.email;
                token.role = user.role;
                token.nama_pengguna = user.nama_pengguna;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            session.user.role = token.role as string;
            session.user.nama_pengguna = token.nama_pengguna as string;
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            role: string;
            nama_pengguna: string;
        } & DefaultSession['user'];
    }

    interface User extends DefaultUser {
        id: string;
        role: string;
        nama_pengguna: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        role: string;
        nama_pengguna: string;
    }
}

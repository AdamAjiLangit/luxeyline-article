import React from 'react';
import LoginComponent from '@/components/pages/login/login-component';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Login = async () => {
    const session = await getServerSession(authOptions);

    if (session?.user?.role === 'admin') {
        redirect('/dashboard');
    }

    if (session?.user?.role === 'user') {
        redirect('/user/articles');
    }

    return (
        <div className='flex justify-center items-center'>
            <LoginComponent />
        </div>
    )
}

export default Login
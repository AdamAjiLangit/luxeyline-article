import React from 'react';
import RegisterComponent from '@/components/pages/register/register-component';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Register = async () => {
    const session = await getServerSession(authOptions);

    if (session?.user?.role === 'admin') {
        redirect('/dashboard');
    }

    if (session?.user?.role === 'user') {
        redirect('/user/articles');
    }

    return (
        <div className='flex justify-center items-center'>
            <RegisterComponent />
        </div>
    )
}

export default Register
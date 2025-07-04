'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import AnimatedLink from '../ui/animated-link';
import MobileSidebar from '../ui/mobile-sidebar';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const HIDDEN_PATHS = ['/login', '/register'];

const Navbar = () => {
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const shouldHideNavbar =
        pathname?.startsWith('/dashboard') || HIDDEN_PATHS.includes(pathname);

    if (shouldHideNavbar) return null;

    const isLoggedIn = status === 'authenticated';

    return (
        <div className='px-6 md:px-14 py-6 bg-transparent flex justify-between items-center mb-10'>
            <div className='flex items-center gap-3 text-xl font-bold'>
                <Link href='/'>Luxeyline</Link>
            </div>

            <div className='hidden md:flex items-center gap-7 lg:gap-12'>
                <AnimatedLink text='Home' href='/' customStyle="text-black md:text-base lg:text-lg after:bg-black" />
                <AnimatedLink text='Articles' href='/user/articles' customStyle="text-black md:text-base lg:text-lg after:bg-black" />
                <AnimatedLink text='About' href='/user/about' customStyle="text-black md:text-base lg:text-lg after:bg-black" />
                <AnimatedLink text='Contact' href='#contact' customStyle="text-black md:text-base lg:text-lg after:bg-black" />
            </div>

            <div className='hidden md:flex items-center gap-5'>
                {isLoggedIn ? (
                    <>
                        <span className="md:text-base lg:text-lg font-medium text-black">
                            Hi, {session?.user?.nama_pengguna}
                        </span>
                        <Button
                            variant="ghost"
                            onClick={() => signOut({ callbackUrl: '/login' })}
                            className="text-red-600 text-base"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className='md:text-base lg:text-lg'>
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className='bg-transparent text-black md:text-base lg:text-lg rounded-full px-5 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300'
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>

            <MobileSidebar />
        </div>
    );
};

export default Navbar;

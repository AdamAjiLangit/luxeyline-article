'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import AnimatedLink from '../ui/animated-link';
import MobileSidebar from '../ui/mobile-sidebar';
import Image from 'next/image';
import LangSwitcher from '@/hooks/langSwitcher';

const HIDDEN_PATHS = ['/login', '/register'];

const Navbar = () => {
    const pathname = usePathname();

    const shouldHideNavbar =
        pathname?.startsWith('/kebijakan') || pathname?.startsWith('/pengembalian-dana') || pathname?.startsWith('/syarat-ketentuan') || pathname?.startsWith('/en') || HIDDEN_PATHS.includes(pathname);

    if (shouldHideNavbar) return null;

    return (
        <div className='fixed top-0 left-0 right-0 z-20 bg-real/80 backdrop-blur-md shadow-sm px-6 md:px-14 py-6 flex justify-between items-center'>
            <div className='flex items-center gap-3 text-xl font-bold'>
                <Image src="/assets/images/icon.png" alt="Si Lughoh Logo" width={40} height={40} className='rounded-lg' />
                <Link href='/'>Si Lughoh</Link>
            </div>

            <div className='hidden xl:flex items-center gap-7 lg:gap-9'>
                <AnimatedLink text='Beranda' href='/' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Tentang' href='/tentang' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Kontak' href='/kontak' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Kebijakan' href='/kebijakan' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Syarat & Ketentuan' href='/syarat-ketentuan' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Pengembalian Dana' href='/pengembalian-dana' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <LangSwitcher />
            </div>

            <MobileSidebar />
        </div>
    );
};

export default Navbar;

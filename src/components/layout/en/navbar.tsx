'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import AnimatedLink from '@/components/ui/animated-link';
import MobileSidebar from '@/components/ui/mobile-sidebar';
import Image from 'next/image';
import LangSwitcher from '@/hooks/langSwitcher';

const HIDDEN_PATHS = ['/login', '/register'];

const NavbarEN = () => {
    const pathname = usePathname();

    const shouldHideNavbar =
        pathname?.startsWith('/en/privacy-policy') ||
        pathname?.startsWith('/en/refund-policy') ||
        pathname?.startsWith('/en/terms') ||
        HIDDEN_PATHS.includes(pathname);

    if (shouldHideNavbar) return null;

    return (
        <div className='fixed top-0 left-0 right-0 z-20 bg-real/80 backdrop-blur-md shadow-sm px-6 md:px-14 py-6 flex justify-between items-center'>
            <div className='flex items-center gap-3 text-xl font-bold'>
                <Image
                    src="/assets/images/icon.png"
                    alt="Si Lughoh Logo"
                    width={40}
                    height={40}
                    className='rounded-lg'
                />
                <Link href='/'>Si Lughoh</Link>
            </div>

            <div className='hidden xl:flex items-center gap-7 lg:gap-9'>
                <AnimatedLink text='Home' href='/' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='About' href='/en/about' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Contact' href='/en/contact' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Privacy Policy' href='/en/privacy-policy' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Terms & Conditions' href='/en/terms' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <AnimatedLink text='Refund Policy' href='/en/refund-policy' customStyle="text-black md:text-base lg:text-lg after:bg-[#1FADE1]" />
                <LangSwitcher />
            </div>

            <MobileSidebar />
        </div>
    );
};

export default NavbarEN;

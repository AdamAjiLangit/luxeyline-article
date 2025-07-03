import Link from 'next/link';
import React from 'react';
import AnimatedLink from '../ui/animated-link';
import MobileSidebar from '../ui/mobile-sidebar';

const Navbar = () => {
    return (
        <div className='px-6 md:px-14 py-6 bg-transparent flex justify-between items-center mb-10'>
            <div className='flex items-center gap-3 text-xl font-bold'>
                <Link href='/'>Luxeyline</Link>
            </div>

            {/* Desktop Links */}
            <div className='hidden md:flex items-center gap-7 lg:gap-12'>
                <AnimatedLink text='Home' href='/' customStyle="text-black md:text-base lg:text-lg after:bg-black" />
                <AnimatedLink text='Articles' href='/user/articles' customStyle="text-black md:text-base lg:text-lg after:bg-black" />
                <AnimatedLink text='About' href='/user/about' customStyle="text-black md:text-base lg:text-lg after:bg-black" />
                <AnimatedLink text='Contact' href='#contact' customStyle="text-black md:text-base lg:text-lg after:bg-black" />
            </div>

            {/* Desktop Auth Buttons */}
            <div className='hidden md:flex items-center gap-5'>
                <Link href="/login" className='md:text-base lg:text-lg'>Login</Link>
                <Link href="/register" className='bg-transparent text-black md:text-base lg:text-lg rounded-full px-5 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300'>
                    Register
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <MobileSidebar />
        </div>
    )
}

export default Navbar;

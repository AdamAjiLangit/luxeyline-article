'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import AnimatedLink from './animated-link'

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => setIsOpen(!isOpen)

    return (
        <div className="md:hidden">
            <button onClick={toggleSidebar}>
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center px-6 md:px-14 py-6 border-b">
                    <h2 className="text-xl font-bold">Luxeyline</h2>
                    <button onClick={toggleSidebar}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex flex-col gap-6 p-6">
                    <AnimatedLink text="Home" href="/" customStyle="text-black text-base after:bg-black" />
                    <AnimatedLink text="Articles" href="/user/articles" customStyle="text-black text-base after:bg-black" />
                    <AnimatedLink text="About" href="/user/about" customStyle="text-black text-base after:bg-black" />
                    <AnimatedLink text="Contact" href="#contact" customStyle="text-black text-base after:bg-black" />
                    <Link href="/login" className="text-black">Login</Link>
                    <Link
                        href="/register"
                        className="bg-black text-white text-center rounded-full px-4 py-2 text-sm"
                    >
                        Register
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default MobileSidebar

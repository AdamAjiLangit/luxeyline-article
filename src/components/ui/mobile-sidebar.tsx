'use client';

import Link from 'next/link';
import { LogOut, Menu } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import AnimatedLink from './animated-link';
import { Button } from '@/components/ui/button';

const MobileSidebar = () => {
    const { data: session, status } = useSession();
    const isLoggedIn = status === 'authenticated';

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <button aria-label="Open menu">
                        <Menu className="w-6 h-6" />
                    </button>
                </SheetTrigger>

                <SheetContent side="right" className="w-64 p-6">
                    <SheetHeader className="flex flex-row items-center justify-between mb-6 p-0">
                        <h2 className="text-xl font-bold">Luxeyline</h2>
                    </SheetHeader>

                    <nav className="flex flex-col gap-6">
                        <SheetClose asChild>
                            <AnimatedLink
                                text="Home"
                                href="/"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        <SheetClose asChild>
                            <AnimatedLink
                                text="Articles"
                                href="/user/articles"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        <SheetClose asChild>
                            <AnimatedLink
                                text="About"
                                href="/user/about"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        <SheetClose asChild>
                            <AnimatedLink
                                text="Contact"
                                href="#contact"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        {isLoggedIn ? (
                            <>
                                <div className="text-black font-medium text-base">
                                    Hi, {session?.user?.nama_pengguna}
                                </div>
                                <SheetClose asChild>
                                    <Button
                                        variant="ghost"
                                        className="text-red-600 text-base w-fit px-0 justify-start"
                                        onClick={() => signOut({ callbackUrl: '/login' })}
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Logout
                                    </Button>
                                </SheetClose>
                            </>
                        ) : (
                            <>
                                <SheetClose asChild>
                                    <Link href="/login" className="text-black text-base">
                                        Login
                                    </Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link
                                        href="/register"
                                        className="bg-black text-white text-center rounded-full px-4 py-2 text-sm"
                                    >
                                        Register
                                    </Link>
                                </SheetClose>
                            </>
                        )}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileSidebar;

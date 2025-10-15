'use client';

import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import AnimatedLink from './animated-link';
import LangSwitcher from '@/hooks/langSwitcher';

const MobileSidebarEN = () => {
    return (
        <div className="xl:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <button aria-label="Open menu">
                        <Menu className="w-6 h-6" />
                    </button>
                </SheetTrigger>

                <SheetContent side="right" className="w-64 p-6">
                    <SheetHeader className="flex flex-row items-center justify-between mb-6 p-0">
                        <h2 className="text-xl font-bold">Si Lughoh</h2>
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
                                text="About"
                                href="/about"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        <SheetClose asChild>
                            <AnimatedLink
                                text="Contact"
                                href="/contact"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        <SheetClose asChild>
                            <AnimatedLink
                                text="Privacy Policy"
                                href="/privacy-policy"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        <SheetClose asChild>
                            <AnimatedLink
                                text="Terms & Conditions"
                                href="/terms"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        <SheetClose asChild>
                            <AnimatedLink
                                text="Refund Policy"
                                href="/refund-policy"
                                customStyle="text-black text-base after:bg-black"
                            />
                        </SheetClose>

                        <SheetClose asChild>
                            <LangSwitcher />
                        </SheetClose>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileSidebarEN;

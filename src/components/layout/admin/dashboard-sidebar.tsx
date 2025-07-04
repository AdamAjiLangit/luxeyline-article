'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Home, FileText, Layers, LogOut, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: Home },
    { label: 'Articles', href: '/dashboard/articles', icon: FileText },
    { label: 'Categories', href: '/dashboard/categories', icon: Layers },
];

export default function DashboardSidebar() {
    const [open, setOpen] = useState(false);

    const sidebarContent = (
        <div className="p-4 w-64">
            <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
            <nav className="space-y-2">
                {navItems.map(({ label, href, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors'
                        )}
                        onClick={() => setOpen(false)}
                    >
                        <Icon className="w-4 h-4" />
                        {label}
                    </Link>
                ))}
                <Button
                    variant="ghost"
                    className="cursor-pointer mt-10 w-full justify-start text-sm text-red-600 hover:text-red-700"
                    onClick={() => signOut({ callbackUrl: '/login' })}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </nav>
        </div>
    );

    return (
        <>
            <aside className="hidden lg:block fixed left-0 top-0 w-64 h-screen border-r bg-background z-20">
                {sidebarContent}
            </aside>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="lg:hidden absolute right-4 top-4 z-30">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 p-0">
                    {sidebarContent}
                </SheetContent>
            </Sheet>
        </>
    );
}

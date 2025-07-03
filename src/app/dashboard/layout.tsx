'use client';

import React from 'react';
import DashboardSidebar from '@/components/layout/admin/dashboard-sidebar';
import Topbar from '@/components/layout/admin/top-bar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden">
            <DashboardSidebar />

            <div className="flex flex-col flex-1">
                <Topbar />

                <main className="flex-1 overflow-y-auto bg-muted/10 p-6 pt-20 md:pl-72">
                    {children}
                </main>
            </div>
        </div>
    );
}

'use client';

import React from 'react';
import DashboardSidebar from '@/components/layout/admin/dashboard-sidebar';
import Topbar from '@/components/layout/admin/top-bar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-muted/10">
            <div className="w-full lg:w-72">
                <DashboardSidebar />
            </div>

            <div className="flex flex-col flex-1">
                <Topbar />
                <main className="flex-1 p-4 pt-20 overflow-x-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

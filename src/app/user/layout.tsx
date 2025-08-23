import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='mt-32'>
            {children}
        </div>
    );
}

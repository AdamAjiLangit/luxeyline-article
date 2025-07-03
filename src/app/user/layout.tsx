import React from 'react';
import { ReactLenis } from 'lenis/react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}

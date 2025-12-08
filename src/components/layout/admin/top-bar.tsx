'use client';

export default function Topbar() {
    return (
        <header className="fixed top-0 w-full lg:left-64 h-16 border-b bg-background px-6 flex items-center justify-between z-10">
            <div className="text-lg font-semibold">Dashboard</div>
        </header>
    );
}
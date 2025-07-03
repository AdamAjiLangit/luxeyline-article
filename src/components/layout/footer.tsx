'use client';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full border-t bg-transparent mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8 text-sm text-muted-foreground">
                <div className="max-w-md">
                    <h2 className="text-lg font-semibold text-black">Luxeyline News</h2>
                    <p className="mt-2">
                        Sumber terpercaya Anda untuk berita, tren, dan insight terbaru di dunia properti mewah. Kurasi artikel oleh tim editorial berpengalaman.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-black font-medium">Navigasi</h3>
                    <Link href="/">Home</Link>
                    <Link href="/user/articles">Articles</Link>
                    <Link href="/user/about">About</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-black font-medium">Hubungi Kami</h3>
                    <p>Email: info@luxeyline.news</p>
                    <p>Telepon: +62 812 3456 7890</p>
                    <p>Alamat: Jakarta Selatan, Indonesia</p>
                </div>
            </div>

            <div className="border-t text-center py-6 text-xs text-gray-500">
                © {new Date().getFullYear()} Luxeyline News. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
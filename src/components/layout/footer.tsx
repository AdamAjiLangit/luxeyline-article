'use client';

import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    const HIDDEN_PATHS = ['/login', '/register'];
    const shouldHideFooter = pathname?.startsWith('/kebijakan') || pathname?.startsWith('/en') || pathname?.startsWith('/syarat-ketentuan') || pathname?.startsWith('/pengembalian-dana') || HIDDEN_PATHS.includes(pathname);

    if (shouldHideFooter) return null;

    return (
        <footer className="w-full border-t bg-transparent mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8 text-sm text-muted-foreground">
                {/* Brand & Description */}
                <div className="max-w-md">
                    <h2 className="text-lg font-semibold text-black">Si Lughoh</h2>
                    <p className="mt-2">
                        Si Lughoh adalah aplikasi belajar bahasa berbasis gamifikasi yang
                        seru dan interaktif. Latih kemampuan listening dan speaking Anda
                        dengan cara menyenangkan, kapan pun di mana pun.
                    </p>
                </div>

                {/* Navigation */}
                {/* <div className="flex flex-col gap-2">
                    <h3 className="text-black font-medium">Navigasi</h3>
                    <Link href="/">Beranda</Link>
                    <Link href="/fitur">Fitur</Link>
                    <Link href="/harga">Harga</Link>
                    <Link href="/tentang">Tentang Kami</Link>
                    <Link href="#kontak">Kontak</Link>
                </div> */}

                {/* Contact */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-black font-medium">Hubungi Kami</h3>
                    <p>Email: <a href="mailto:support@silughoh.com" className="underline">support@silughoh.com</a></p>
                    <p>Telepon: +62 858 7620 0203</p>
                    <p>Alamat: Kudus, Indonesia</p>
                </div>
            </div>

            <div className="border-t text-center py-6 text-xs text-gray-500">
                © {new Date().getFullYear()} Si Lughoh. Developed By PT. Tamim Bisa Indonesia.
            </div>
        </footer>
    );
};

export default Footer;

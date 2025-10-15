'use client';

import { usePathname } from 'next/navigation';

const FooterEN = () => {
    const pathname = usePathname();

    const HIDDEN_PATHS = ['/login', '/register'];
    const shouldHideFooter =
        pathname?.startsWith('/en/privacy-policy') ||
        pathname?.startsWith('/en/terms') ||
        pathname?.startsWith('/en/refund-policy') ||
        HIDDEN_PATHS.includes(pathname);

    if (shouldHideFooter) return null;

    return (
        <footer className="w-full border-t bg-transparent mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8 text-sm text-muted-foreground">
                {/* Brand & Description */}
                <div className="max-w-md">
                    <h2 className="text-lg font-semibold text-black">Si Lughoh</h2>
                    <p className="mt-2">
                        Si Lughoh is a gamified language learning app that makes studying fun and interactive.
                        Improve your listening and speaking skills anytime, anywhere in an enjoyable way.
                    </p>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-black font-medium">Contact Us</h3>
                    <p>Email: <a href="mailto:support@silughoh.com" className="underline">support@silughoh.com</a></p>
                    <p>Phone: +62 858 7620 0203</p>
                    <p>Address: Kudus, Indonesia</p>
                </div>
            </div>

            <div className="border-t text-center py-6 text-xs text-gray-500">
                © {new Date().getFullYear()} Si Lughoh. Developed by PT. Tamim Bisa Indonesia.
            </div>
        </footer>
    );
};

export default FooterEN;

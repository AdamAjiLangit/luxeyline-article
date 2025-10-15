"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

export default function LangSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    const routeMap: Record<string, string> = {
        "/": "/en",
        "/tentang": "/en/about",
        "/kontak": "/en/contact",
        "/kebijakan": "/en/privacy-policy",
        "/terms": "/en/terms",
        "/refund-policy": "/en/refund-policy",

        "/en": "/",
        "/en/about": "/tentang",
        "/en/contact": "/kontak",
        "/en/privacy-policy": "/kebijakan",
        "/en/terms": "/terms",
        "/en/refund-policy": "/refund-policy",
    };

    const switchLang = () => {
        if (!pathname) return;

        if (routeMap[pathname]) {
            router.push(routeMap[pathname]);
            return;
        }

        if (pathname.startsWith("/en/")) {
            router.push(pathname.replace(/^\/en/, ""));
        } else {
            router.push(`/en${pathname}`);
        }
    };

    const isEnglish = pathname?.startsWith("/en");

    return (
        <Button
            onClick={switchLang}
            variant="ghost"
            className="text-sm hover:underline transition-all"
        >
            {isEnglish ? "🇮🇩 Indonesia" : "🇬🇧 English"}
        </Button>
    );
}
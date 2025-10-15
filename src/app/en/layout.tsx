import type { Metadata } from "next";
import "../globals.css";
import NavbarEN from "@/components/layout/en/navbar";
import FooterEN from "@/components/layout/en/footer";

export const metadata: Metadata = {
    title: 'Si Lughoh | Fun & Interactive Language Learning App',
    description:
        'Si Lughoh is a gamified and interactive language learning app. Improve your listening and speaking skills in a fun way — only $6.50/month!',
    openGraph: {
        title: 'Si Lughoh | Make Language Learning Fun!',
        description:
            'Boost your listening and speaking skills with Si Lughoh — the gamified, interactive language learning app. Try it now for only $6.50/month!',
        url: 'https://silughoh.com/en',
        siteName: 'Si Lughoh',
        images: [
            {
                url: '/assets/images/silughoh-og.png',
                width: 1200,
                height: 630,
                alt: 'Si Lughoh | Fun & Interactive Language Learning App',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Si Lughoh | Fun & Interactive Language Learning App',
        description:
            'Learn languages through engaging gamification. Practice listening & speaking the fun way with Si Lughoh!',
        images: ['/assets/images/silughoh-og.png'],
    },
    keywords: [
        'Si Lughoh',
        'language learning app',
        'learn speaking online',
        'interactive listening practice',
        'gamified language learning',
        'Indonesian language learning app',
        'fun way to learn languages',
    ],
    authors: [{ name: 'Si Lughoh Team' }],
    metadataBase: new URL('https://silughoh.com/en'),
};

export default function EnglishLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavbarEN />
            {children}
            <FooterEN />
        </>
    );
}
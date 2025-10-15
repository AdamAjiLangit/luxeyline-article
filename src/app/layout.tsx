import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/client-layout";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'Si Lughoh | Aplikasi Belajar Bahasa Seru & Interaktif',
  description:
    'Si Lughoh adalah aplikasi belajar bahasa berbasis gamifikasi yang seru dan interaktif. Latih kemampuan listening dan speaking Anda dengan cara menyenangkan hanya Rp100.000/bulan!',
  openGraph: {
    title: 'Si Lughoh | Belajar Bahasa Jadi Seru!',
    description:
      'Tingkatkan kemampuan listening dan speaking dengan Si Lughoh — aplikasi belajar bahasa dengan sistem gamifikasi seru dan interaktif. Coba sekarang, langganan hanya Rp100.000/bulan!',
    url: 'https://silughoh.com/',
    siteName: 'Si Lughoh',
    images: [
      {
        url: '/assets/images/silughoh-og.png',
        width: 1200,
        height: 630,
        alt: 'Si Lughoh | Aplikasi Belajar Bahasa Interaktif',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Si Lughoh | Aplikasi Belajar Bahasa Seru & Interaktif',
    description:
      'Belajar bahasa asing dengan gamification interaktif. Latihan listening & speaking makin seru bersama Si Lughoh!',
    images: ['/assets/images/silughoh-og.png'],
  },
  keywords: [
    'Si Lughoh',
    'aplikasi belajar bahasa',
    'belajar speaking online',
    'belajar listening interaktif',
    'gamification language learning',
    'aplikasi belajar bahasa Indonesia',
    'belajar bahasa seru',
  ],
  authors: [{ name: 'Tim Si Lughoh' }],
  metadataBase: new URL('https://silughoh.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

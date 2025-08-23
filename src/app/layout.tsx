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
  title: 'Luxeyline News | Artikel Real Estate Terbaru',
  description:
    'Selamat datang di Luxeyline News — sumber terpercaya Anda untuk berita, tren, dan insight terbaru di dunia properti mewah. Tetap terdepan dengan update berkualitas dari tim editorial kami.',
  openGraph: {
    title: 'Luxeyline News | Artikel Real Estate Terbaru',
    description:
      'Dapatkan wawasan mendalam tentang pasar properti mewah, tren terbaru, dan artikel pilihan yang dikurasi oleh tim Luxeyline.',
    url: 'https://luxeyline-articles.netlify.app/',
    siteName: 'Luxeyline News',
    images: [
      {
        url: 'assets/images/luxeyline.png',
        width: 1200,
        height: 630,
        alt: 'Luxeyline News | Artikel Properti Mewah',
      },
    ],
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased mt-32`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

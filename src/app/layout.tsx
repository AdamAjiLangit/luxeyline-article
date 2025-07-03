import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
    url: 'http://localhost:3000',
    siteName: 'Luxeyline News',
    images: [
      {
        url: 'http://localhost:3000/images/luxeyline-news.jpg',
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
        className={`antialiased`}
      >
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <Navbar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}

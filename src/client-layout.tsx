"use client";

import { useState, useEffect } from "react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Providers } from "./app/providers";
import { Toaster } from "react-hot-toast";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface ClientLayoutProps {
    children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // adjust breakpoint as needed
        };

        checkMobile(); // run once on mount
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scrollSettings = isMobile
        ? {
            duration: 1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as const,
            gestureDirection: "vertical" as const,
            smooth: true,
            smoothTouch: true,
            touchMultiplier: 1.5,
            infinite: false,
            lerp: 0.05,
            wheelMultiplier: 1,
            orientation: "vertical" as const,
            smoothWheel: true,
            syncTouch: true,
        }
        : {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as const,
            gestureDirection: "vertical" as const,
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
            lerp: 0.1,
            wheelMultiplier: 1,
            orientation: "vertical" as const,
            smoothWheel: true,
            syncTouch: true,
        };

    return (
        <ReactLenis root options={scrollSettings}>
            <Providers>
                <Toaster position="top-center" reverseOrder={false} />
                <Navbar />
                {children}
                <Footer />
            </Providers>
        </ReactLenis>
    );
}

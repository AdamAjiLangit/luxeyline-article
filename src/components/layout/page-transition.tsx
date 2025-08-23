"use client";

import { useEffect, useRef, useCallback, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const overlayRef = useRef<HTMLDivElement | null>(null);
    const blocksRef = useRef<HTMLDivElement[]>([]);
    const isTransitioning = useRef(false);
    const revealTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleRouteChange = useCallback((url: string) => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        coverPage(url);
    }, []);

    const onAnchorClick = useCallback(
        (e: MouseEvent) => {
            if (isTransitioning.current) {
                e.preventDefault();
                return;
            }

            const target = e.currentTarget as HTMLAnchorElement | null;
            if (!target) return;

            if (
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey ||
                (e as MouseEvent).button !== 0 ||
                target.target === "_blank"
            ) {
                return;
            }

            e.preventDefault();
            const href = target.href;
            const url = new URL(href).pathname;
            if (url !== pathname) {
                handleRouteChange(url);
            }
        },
        [pathname, handleRouteChange]
    );

    const revealPage = useCallback(() => {
        if (revealTimeoutRef.current) {
            clearTimeout(revealTimeoutRef.current);
        }

        gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

        gsap.to(blocksRef.current, {
            scaleX: 0,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
                isTransitioning.current = false;
                if (overlayRef.current) {
                    overlayRef.current.style.pointerEvents = "none";
                }
            },
        });

        revealTimeoutRef.current = setTimeout(() => {
            if (blocksRef.current.length > 0) {
                const firstBlock = blocksRef.current[0];
                if (firstBlock && (gsap.getProperty(firstBlock, "scaleX") as number) > 0) {
                    gsap.to(blocksRef.current, {
                        scaleX: 0,
                        duration: 0.2,
                        ease: "power2.out",
                        transformOrigin: "right",
                        onComplete: () => {
                            isTransitioning.current = false;
                            if (overlayRef.current) {
                                overlayRef.current.style.pointerEvents = "none";
                            }
                        },
                    });
                }
            }
        }, 1000);
    }, []);

    useEffect(() => {
        const createBlocks = () => {
            if (!overlayRef.current) return;
            overlayRef.current.innerHTML = "";
            blocksRef.current = [];

            for (let i = 0; i < 20; i++) {
                const block = document.createElement("div");
                block.className = "block";
                overlayRef.current.appendChild(block);
                blocksRef.current.push(block);
            }
        };

        createBlocks();

        gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

        revealPage();

        const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');
        links.forEach((link) => {
            link.addEventListener("click", onAnchorClick);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", onAnchorClick);
            });
            if (revealTimeoutRef.current) {
                clearTimeout(revealTimeoutRef.current);
            }
        };
    }, [router, pathname, onAnchorClick, revealPage]);

    const coverPage = (url: string) => {
        if (overlayRef.current) {
            overlayRef.current.style.pointerEvents = "auto";
        }

        const tl = gsap.timeline({
            onComplete: () => router.push(url),
        });

        tl.to(blocksRef.current, {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "left",
        });
    };

    return (
        <>
            <div ref={overlayRef} className="transition-overlay" />
            {children}
        </>
    );
};

export default PageTransition;

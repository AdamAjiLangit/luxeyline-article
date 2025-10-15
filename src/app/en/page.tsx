import { BookUp2, Gamepad2, Headphones, Megaphone } from "lucide-react";
import { ReactLenis } from "lenis/react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TestimoniSectionEN from "@/components/pages/homepage/en/testimonial";
import PricingSectionEN from '../../components/pages/homepage/en/pricing';
import FAQSectionEN from "@/components/pages/homepage/en/faq";

export default function HomeEN() {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <div className="flex flex-col mt-52 px-6 md:px-14 gap-5">
                <h1 className="text-3xl md:text-4xl mb-5 font-bold leading-12">
                    Make Language Learning Fun with
                    <br className="block xl:hidden" />{" "}
                    <span className="bg-[#1FADE1] p-1 rounded-xl border border-black text-white border-dashed">
                        Si Lughoh!
                    </span>
                </h1>
                <p>
                    An interactive app with a gamified system — improve your listening &
                    speaking skills in a fun and engaging way!
                </p>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                    <Button
                        className="w-fit h-12 bg-gradient-to-b cursor-pointer px-8 py-6 from-[#D53C67] to-[#c95978] text-white font-semibold hover:opacity-90 transition-all"
                        size="lg"
                    >
                        <Image
                            src="/assets/images/ps.png"
                            alt="Play Store"
                            width={25}
                            height={25}
                        />
                        Download on Play Store
                    </Button>
                    <Button
                        variant="ghost"
                        className="border w-fit cursor-pointer border-gray-400 px-8 py-6 bg-transparent text-gray-700 flex items-center gap-2"
                    >
                        <Image
                            src="/assets/images/apple.png"
                            alt="App Store"
                            width={25}
                            height={25}
                        />
                        Download on App Store
                    </Button>
                </div>

                <Image
                    src="/assets/images/mockup.png"
                    alt="Hero Image"
                    width={300}
                    height={300}
                    className="xl:absolute top-20 right-20"
                />

                <div className="mt-52 flex flex-col gap-5">
                    <h2 className="text-3xl font-medium">
                        Why Choose{" "}
                        <span className="underline decoration-[#1FADE1]">Si Lughoh?</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
                        {/* Card 1 */}
                        <div className="border rounded-xl p-6 flex flex-col items-center text-center">
                            <Headphones size={40} color="#D53C67" />
                            <h3 className="text-lg font-semibold mt-4">Real-Life Listening</h3>
                            <p className="text-gray-600 mt-2">
                                Listen to real conversations, not robotic voices.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border rounded-xl p-6 flex flex-col items-center text-center">
                            <Megaphone size={40} color="#D53C67" />
                            <h3 className="text-lg font-semibold mt-4">Interactive Speaking</h3>
                            <p className="text-gray-600 mt-2">
                                Practice speaking with AI and get instant feedback.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="border rounded-xl p-6 flex flex-col items-center text-center">
                            <Gamepad2 size={40} color="#D53C67" />
                            <h3 className="text-lg font-semibold mt-4">Fun Gamification</h3>
                            <p className="text-gray-600 mt-2">
                                Earn XP, level up, and unlock badges for every achievement.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="border rounded-xl p-6 flex flex-col items-center text-center">
                            <BookUp2 size={40} color="#D53C67" />
                            <h3 className="text-lg font-semibold mt-4">Structured Lessons</h3>
                            <p className="text-gray-600 mt-2">
                                From beginner to advanced — learn step by step with guided materials.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-medium">
                        What{" "}
                        <span className="underline decoration-[#1FADE1]">They Say</span>
                    </h2>
                    <TestimoniSectionEN />
                </div>
            </div>

            <PricingSectionEN />
            <FAQSectionEN />
        </ReactLenis>
    );
}

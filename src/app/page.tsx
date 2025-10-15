import { BookUp2, Gamepad2, Headphones, Megaphone } from "lucide-react";
import { ReactLenis } from "lenis/react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TestimoniSection from "@/components/pages/homepage/testimonial";
import PricingSection from "@/components/pages/homepage/pricing";
import FAQSection from "@/components/pages/homepage/faq";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="flex flex-col mt-52 px-6 md:px-14 gap-5">
        <h1 className="text-3xl md:text-4xl mb-5 font-bold leading-12">Belajar Bahasa Jadi Seru dengan<br className="block xl:hidden" /> <span className="bg-[#1FADE1] p-1 rounded-xl border border-black text-white border-dashed">Si Lughoh!</span></h1>
        <p>Aplikasi interaktif dengan sistem gamifikasi — tingkatkan listening & speaking-mu dengan cara yang menyenangkan!</p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <Button className="w-fit h-12 bg-gradient-to-b cursor-pointer px-8 py-6 from-[#D53C67] to-[#c95978] text-white font-semibold hover:opacity-90 transition-all" size="lg">
            <Image src="/assets/images/ps.png" alt="Play Store" width={25} height={25} />
            Unduh di Play Store
          </Button>
          <Button variant="ghost" className="border w-fit cursor-pointer border-gray-400 px-8 py-6 bg-transparent text-gray-700 flex items-center gap-2"
          >
            <Image src="/assets/images/apple.png" alt="Play Store" width={25} height={25} />
            Unduh di App Store
          </Button>
        </div>
        <Image src="/assets/images/mockup.png" alt="Hero Image" width={300} height={300} className="xl:absolute top-20 right-20" />
        <div className="mt-52 flex flex-col gap-5">
          <h2 className="text-3xl font-medium">Kenapa Harus <span className="underline decoration-[#1FADE1]">Si Lughoh?</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
            {/* Card 1 */}
            <div className="border rounded-xl p-6 flex flex-col items-center text-center">
              <Headphones size={40} color="#D53C67" />
              <h3 className="text-lg font-semibold mt-4">Listening Real-Life</h3>
              <p className="text-gray-600 mt-2">Dengarkan percakapan nyata, bukan suara robot.</p>
            </div>

            {/* Card 2 */}
            <div className="border rounded-xl p-6 flex flex-col items-center text-center">
              <Megaphone size={40} color="#D53C67" />
              <h3 className="text-lg font-semibold mt-4">Speaking Interaktif</h3>
              <p className="text-gray-600 mt-2">Latihan bicara dengan AI dan dapatkan feedback langsung.</p>
            </div>

            {/* Card 3 */}
            <div className="border rounded-xl p-6 flex flex-col items-center text-center">
              <Gamepad2 size={40} color="#D53C67" />
              <h3 className="text-lg font-semibold mt-4">Gamification Seru</h3>
              <p className="text-gray-600 mt-2">Dapatkan XP, naik level, dan buka badge tiap pencapaian.</p>
            </div>

            {/* Card 4 */}
            <div className="border rounded-xl p-6 flex flex-col items-center text-center">
              <BookUp2 size={40} color="#D53C67" />
              <h3 className="text-lg font-semibold mt-4">Materi Bertingkat</h3>
              <p className="text-gray-600 mt-2">Dari pemula hingga mahir, semuanya terstruktur.</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-medium">Apa <span className="underline decoration-[#1FADE1]">Kata</span> Mereka</h2>
          <TestimoniSection />
        </div>
      </div>
      <PricingSection />
      <FAQSection />
    </ReactLenis >
  );
}
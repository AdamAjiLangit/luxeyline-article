import { CarouselImage } from "@/components/pages/homepage/carousel";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { MoveRight } from "lucide-react";
import { GridSlice } from "@/components/pages/homepage/grid-slice";
import { NewsSection } from "@/components/pages/homepage/news-section";
import { ContactSection } from "@/components/pages/homepage/contact-section";
import { ReactLenis } from "lenis/react";
import React from "react";
import TextReveal from "@/components/ui/text-reveal";
import AnimatedLinkNew from "@/components/ui/animated-link-new";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === 'admin') {
    redirect('/dashboard');
  };

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-green-800">
          <TextReveal delay={0.3}>
            <p className="text-lg">⋇</p>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-sm font-lora">Top 1 Trusted Home Sales</p>
          </TextReveal>
        </div>
        <TextReveal delay={0.3}>
          <h1 className="px-5 md:px-0 text-xl md:text-[3.5vw] tracking-tighter text-center mt-4 mb-2 max-w-[1350px]">
            You&apos;re Looking for a comfortable and luxurious family
            stay, we have something for everyone.
          </h1>
        </TextReveal>
        <TextReveal delay={0.3}>
          <p className="px-5 md:px-0 text-[#9a9696] max-w-[700px] text-sm md:text-base text-center mb-14 font-lora">
            Our properties are situated in the most sought-after neighborhoods, <br /> offering prime access to amenities, entertainment, and prestigious schools.
          </p>
        </TextReveal>
        <CarouselImage />
      </div>
      <div className="flex flex-col px-5 md:px-14 gap-10 md:gap-20 mb-20">
        <TextReveal animateOnScroll={true}>
          <h1 className="text-xl md:text-[2.5vw] tracking-tighter">We Are <br /> Luxeyline</h1>
        </TextReveal>
        <div className="flex flex-col-reverse lg:flex-row items-start gap-5 lg:gap-0 lg:items-end justify-between w-full">
          <AnimatedLinkNew
            id="learn-more"
            title="Learn more about us"
            href="/user/about"
            rightIcon={<MoveRight className="w-4 md:w-10" />}
            containerClass="bg-transparent flex-center text-sm md:text-base text-green-800"
          />
          <div className="flex items-center gap-5">
            <div className="w-[2px] h-24 bg-black" />
            <TextReveal animateOnScroll={true}>
              <p className="max-w-[600px] text-sm md:text-lg font-lora tracking-tight">
                Discover our handpicked collection of luxury homes and
                From sleek, modern designs to classic, apartments.
                timeless elegance, our properties boast exceptional quality
                and stunning architecture.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 md:px-14 mb-20 gap-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
          <TextReveal animateOnScroll={true}>
            <h1 className="text-xl md:text-[3.5vw] tracking-tighter">Today&apos;s Top Strories in <br /> High-End Real Estate</h1>
          </TextReveal>
          <TextReveal animateOnScroll={true}>
            <p className="text-[#9a9696] max-w-[500px] font-lora text-sm md:text-base">
              From insider insights to expert analysis, discover everything you need to know to make informed decisions in the high-end property market.
            </p>
          </TextReveal>
        </div>
        <GridSlice />
      </div>
      <div className="px-5 md:px-14">
        <NewsSection />
      </div>
      <div className="flex flex-col px-5 md:px-14 mb-20 gap-20">
        <ContactSection />
      </div>
    </ReactLenis >
  );
}
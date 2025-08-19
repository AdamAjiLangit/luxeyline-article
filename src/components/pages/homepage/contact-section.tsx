'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import TextReveal from '@/components/ui/text-reveal';

export const ContactSection = () => {
    return (
        <div id='contact' className="relative rounded-xl h-[700px] md:h-[500px] overflow-hidden bg-black/90 text-white">
            <Image
                src="/assets/images/bg.jpg"
                alt="Contact Background"
                fill
                className="object-cover object-center opacity-55"
                priority
            />

            <div className="relative z-10 flex flex-col md:flex-row p-8 md:p-14 gap-10 items-center justify-center h-[700px] md:h-[500px]">
                <div className="flex-1 flex flex-col my-auto justify-between gap-6">
                    <div>
                        <TextReveal animateOnScroll={true}>
                            <h2 className="text-xl md:text-[3.5vw] font-semibold leading-snug tracking-tight mb-2">
                                Meet Our Dedicated <br /> Professionals
                            </h2>
                        </TextReveal>
                        <TextReveal animateOnScroll={true}>
                            <p className="text-base md:text-lg text-white max-w-lg">
                                Whether it&apos;s feedback, inquiries, or ideas — we&apos;d love to hear from you. Reach out to us and we&apos;ll get back to you as soon as possible.
                            </p>
                        </TextReveal>
                    </div>
                </div>

                <form className="flex-1 w-full max-w-md space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <Input placeholder="Your name" className="bg-white/80 placeholder:text-gray-700" />
                    <Input type="email" placeholder="Your email" className="bg-white/80 placeholder:text-gray-700" />
                    <Textarea placeholder="Your message..." rows={4} className="bg-white/80 placeholder:text-gray-700" />
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
};

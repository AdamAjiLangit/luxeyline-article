import Image from 'next/image';
import React from 'react';
import { ArrowDown, Award, Headset, ChartPie } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ContactSection } from '@/components/pages/homepage/contact-section';

const About = () => {
    return (
        <>
            <div className="flex flex-col px-5 md:px-14 mb-20">
                <Image
                    src="/assets/images/about.jpg"
                    alt="About Us"
                    width={1200}
                    height={500}
                    className="w-full h-[300px] md:h-[600px] object-cover rounded-lg mb-5"
                />
                <div className="flex items-center gap-2 text-green-800">
                    <p className="text-lg">⋇</p>
                    <p className="text-sm md:text-base">About Us</p>
                </div>
                <div className='flex items-end justify-between mb-20 md:mb-32'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-[3.5rem] tracking-tighter'>Building Your Future, One <br /> Property at a Time</h1>
                    <ArrowDown className='bg-black rounded-full p-3' size={50} color='white' />
                </div>
                <div className='flex flex-col gap-20 mb-32 items-center justify-center px-2 xl:px-52'>
                    <h3 className='max-w-[1000px] text-sm sm:text-base md:text-lg lg:text-[1.5vw] tracking-tight font-lora'>
                        Welcome to Luxeyline, where you can find your dream home! We specialize in
                        buyers with their ideal property. Our experienced team of agents connecting is
                        dedicated to assisting you in an easy and secure purchase. Visit our site to see our
                        wide selection of properties, and let us help you find your dream home.
                    </h3>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center w-full justify-between'>
                        <h3 className='text-lg lg:text-[1.6vw]'>Our Mission</h3>
                        <p className='text-[#9a9696] text-sm md:text-base max-w-[500px] font-lora'>Provide exceptional service and expert guidance to our clients, ensuring that your real estate experience is smooth, transparent, and rewarding.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-10 items-start justify-between md:pr-40 mb-32'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-xl md:text-[3.5vw] tracking-tighter'>Why Choose <br /> Luxeyline ?</h2>
                        <p className='font-lora text-[#9a9696] text-sm md:text-base max-w-[450px]'>At Luxeyline, we are dedicated to providing unparalleled service, expert guidance, and a seamless experience for all your property needs. Here&apos;s why you should choose us</p>
                    </div>
                    <div className='flex flex-col w-full md:w-fit gap-10'>
                        <div className='flex flex-col gap-3'>
                            <Award className='bg-green-800 text-[#cff38a] rounded-full p-3' size={50} />
                            <h4 className='text-base lg:text-[1.4vw] font-semibold'>Expertise</h4>
                            <p className='text-[#9a9696] max-w-[350px] font-lora text-sm md:text-base'>Our team has in-depth knowledge of the real estate market and industry trends.</p>
                            <Separator className='bg-[#9a9696]' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Headset className='bg-green-800 text-[#cff38a] rounded-full p-3' size={50} />
                            <h4 className='text-base lg:text-[1.4vw] font-semibold'>Personalized Service</h4>
                            <p className='text-[#9a9696] max-w-[350px] font-lora text-sm md:text-base'>We tailor our services to meet your unique needs and preferences.</p>
                            <Separator className='bg-[#9a9696]' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <ChartPie className='bg-green-800 text-[#cff38a] rounded-full p-3' size={50} />
                            <h4 className='text-base lg:text-[1.4vw] font-semibold'>Transparancy</h4>
                            <p className='text-[#9a9696] max-w-[350px] font-lora text-sm md:text-base'>We believe in clear and open communication throughout the entire process.</p>
                            <Separator className='bg-[#9a9696]' />
                        </div>
                    </div>
                </div>
                <ContactSection />
            </div>
        </>
    )
}

export default About
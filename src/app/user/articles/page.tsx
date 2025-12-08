import { ArticleFetch } from '@/components/pages/articles/article-fetch';
import { ContactSection } from '@/components/pages/homepage/contact-section';
import { NewsSection } from '@/components/pages/homepage/news-section';
import { Separator } from '@/components/ui/separator';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import TextReveal from '@/components/ui/text-reveal';

const Articles = async () => {
    const session = await getServerSession(authOptions);

    if (session?.user?.role === 'admin') {
        redirect('/dashboard');
    }

    return (
        <div className="flex flex-col px-5 md:px-14 mb-20">
            <TextReveal delay={0.3}>
                <h1 className='text-xl md:text-[3.5vw] tracking-tighter'>Our Trending Article</h1>
            </TextReveal>
            <Separator className='mb-14 bg-black/55' />
            <ArticleFetch />
            <NewsSection />
            <ContactSection />
        </div>
    )
}

export default Articles
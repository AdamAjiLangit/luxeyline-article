import { ArticleFetch } from '@/components/pages/articles/article-fetch';
import { ContactSection } from '@/components/pages/homepage/contact-section';
import { NewsSection } from '@/components/pages/homepage/news-section';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Articles = () => {
    return (
        <div className="flex flex-col px-5 md:px-14 mb-20">
            <h1 className='text-xl md:text-[3.5vw] tracking-tighter'>Our Trending Article</h1>
            <Separator className='mb-14 bg-black/55' />
            <ArticleFetch />
            <NewsSection />
            <ContactSection />
        </div>
    )
}

export default Articles
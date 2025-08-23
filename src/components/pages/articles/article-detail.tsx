'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { format } from 'date-fns';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import { Article } from '@/types/types';
import ReactMarkdown from 'react-markdown';
import AnimatedLinkNew from '@/components/ui/animated-link-new';

const ArticleDetail = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const { data } = await axios.get('/api/articles');
                const allArticles: Article[] = data.data;

                const matched = allArticles.find((item) => item.slug === slug);
                setArticle(matched || null);

                if (matched) {
                    const related = allArticles
                        .filter((item) => item.category === matched.category && item.slug !== matched.slug)
                        .slice(0, 3);

                    setRelatedArticles(related);
                }
            } catch (error) {
                console.error('Failed to load article:', error);
            }
        };
        fetchArticle();
    }, [slug]);

    if (!article) return <p className="max-w-4xl mx-auto px-6">Loading article...</p>;

    return (
        <div className="max-w-4xl mx-auto px-6">
            {/* <Link href="/user/articles" className="flex items-center gap-2 text-sm text-gray-500 mb-6 hover:text-black transition">
                <MoveLeft size={18} />
                Back to Articles
            </Link> */}
            <div className='mb-6'>
                <AnimatedLinkNew
                    id="learn-more"
                    title="Back to Articles"
                    href="/user/articles"
                    leftIcon={<MoveLeft size={18} />}
                    containerClass="bg-transparent flex-center text-sm md:text-base text-gray-500"
                />
            </div>

            <div className="mb-6">
                <span className="text-sm uppercase tracking-wide bg-black/80 text-white px-3 py-1 rounded-full">
                    {article.category.replace('-', ' ')}
                </span>
                <h1 className="mt-4 text-4xl font-bold font-lora leading-tight">{article.title}</h1>
                <p className="text-sm text-gray-500 mt-2">
                    By <span className="font-medium">{article.author}</span> ·{' '}
                    {format(new Date(article.createdAt), 'MMMM d, yyyy')}
                </p>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover w-full h-full"
                />
            </div>

            <article className="prose prose-lg max-w-none text-gray-800">
                <ReactMarkdown>{article.fullContent}</ReactMarkdown>
            </article>

            {relatedArticles.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-semibold mb-6">Other articles in this category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedArticles.map((item) => (
                            <Link
                                key={item.id}
                                href={`/user/articles/${item.slug}`}
                                className="block group transition hover:shadow-md rounded-lg overflow-hidden"
                            >
                                <div className="relative w-full h-52">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-1 group-hover:text-black">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticleDetail;

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Article } from '@/types/types';
import { Separator } from '@/components/ui/separator';

interface ArticleProps {
    article: Article;
}

const formatTimeAgo = (createdAt: string) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffMs = now.getTime() - createdDate.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    return diffHours < 1 ? 'Just now' : `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
};

const ArticlesCard: React.FC<ArticleProps> = ({ article }) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-6 items-center w-full">
                <div className="flex flex-col flex-1 justify-between gap-2">
                    <div className="bg-black/70 text-white text-xs px-3 py-1 rounded-full self-start capitalize w-fit">
                        {article.category.replace('-', ' ')}
                    </div>

                    <h3 className="text-xl font-semibold font-lora">{article.title}</h3>
                    <p className="text-sm text-muted-foreground font-lora">{article.description}</p>

                    <div className="flex flex-col gap-5 text-sm text-gray-500 mt-auto pt-4">
                        <span>{formatTimeAgo(article.createdAt)}</span>
                        <Link href={`/user/articles/${article.slug}`} className="text-white bg-black w-fit p-3 rounded-full flex items-center gap-2">
                            <p>View Article</p>
                            <MoveRight size={16} />
                        </Link>
                    </div>
                </div>

                <div className="relative w-full md:w-[500px] h-[300px] shrink-0 rounded-md overflow-hidden">
                    <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                </div>
            </div>
            <Separator className="my-4 bg-black/55" />
        </>
    );
};

export default ArticlesCard;

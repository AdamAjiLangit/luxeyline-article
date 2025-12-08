'use client';

import React from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { Article } from '@/types/types';
import AnimatedLinkNew from '@/components/ui/animated-link-new';

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

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
    return (
        <div className="overflow-hidden flex flex-col h-full">
            <div className="relative w-full h-64">
                <Image
                    src={article.thumbnail}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full rounded-md"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full capitalize">
                    {article.category.replace('-', ' ')}
                </div>
            </div>

            <div className="py-4 flex flex-col flex-1 gap-2">
                <h3 className="text-lg font-semibold font-lora">{article.title}</h3>
                <p className="text-sm text-muted-foreground font-lora">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto pt-6 min-h-[60px]">
                    <span>{formatTimeAgo(article.createdAt)}</span>
                    <AnimatedLinkNew
                        id='view-article-link'
                        href={`/user/articles/${article.slug}`}
                        title='View Article'
                        containerClass='text-black flex items-center gap-2'
                        rightIcon={<MoveRight size={16} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;

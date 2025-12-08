'use client';

import React, { useEffect, useState } from 'react';
import { Article } from '@/types/types';
import axios from 'axios';
import ArticlesCard from './article-card';

export const ArticleFetch = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const { data } = await axios.get('/api/articles');
                setArticles(data.data);
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div className="flex flex-col gap-10 mb-20">
            {articles.slice(0, 3).map((article) => (
                <ArticlesCard key={article.id} article={article} />
            ))}
        </div>
    );
};

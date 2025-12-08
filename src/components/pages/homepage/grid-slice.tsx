'use client';

import React, { useEffect, useState } from 'react';
import { Article } from '@/types/types';
import axios from 'axios';
import ArticleCard from './article-card';

export const GridSlice = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(0, 4).map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
};

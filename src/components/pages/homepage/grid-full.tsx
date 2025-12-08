'use client';

import React, { useEffect, useState } from 'react';
import { Article } from '@/types/types';
import axios from 'axios';
import ArticleCard from './article-card';
import { GridFullProps } from '@/types/types';

export const GridFull: React.FC<GridFullProps> = ({ selectedCategory, currentPage, perPage, searchQuery = '' }) => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const { data } = await axios.get('/api/articles');
                setArticles(data.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };
        fetchArticles();
    }, []);

    const filtered = articles.filter((article) => {
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        const matchesSearch =
            !searchQuery ||
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.length === 0 ? (
                <p className="text-gray-500 text-center col-span-full">No articles found.</p>
            ) : (
                paginated.map((article) => <ArticleCard key={article.id} article={article} />)
            )}
        </div>
    );
};

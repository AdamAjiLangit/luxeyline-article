'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridFull } from '@/components/pages/homepage/grid-full';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Input } from '@/components/ui/input';
import TextReveal from '@/components/ui/text-reveal';

const ARTICLES_PER_PAGE = 6;

export const NewsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery);
            setCurrentPage(1);
        }, 400);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get('/api/articles');

                const allCategories = (data.data as { category: string }[]).map(item => item.category);

                const unique = Array.from(new Set(allCategories));

                setCategories(unique);
                setTotalArticles(data.data.length);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCategories();
    }, []);


    const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col mb-20 gap-20">
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-4">
                <TextReveal animateOnScroll={true}>
                    <h1 className="text-xl md:text-[3.5vw] tracking-tighter leading-tight">
                        Latest News: Luxeyline <br /> insights and inspiration
                    </h1>
                </TextReveal>
                <div className="flex flex-col items-start xl:items-end gap-5 w-auto">
                    <Input
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-[240px]"
                    />
                    <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat.replace('-', ' ')}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {totalPages > 1 && (
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                                    />
                                </PaginationItem>
                                <PaginationItem>
                                    <span className="text-sm px-4 py-2 rounded-md border border-gray-300">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    )}
                </div>
            </div>

            <GridFull
                selectedCategory={selectedCategory}
                currentPage={currentPage}
                perPage={ARTICLES_PER_PAGE}
                searchQuery={debouncedQuery}
            />
        </div>
    );
};
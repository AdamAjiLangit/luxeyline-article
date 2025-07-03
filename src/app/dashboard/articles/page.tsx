'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Link from 'next/link';
import { Article } from '@/types/types';

const ARTICLES_PER_PAGE = 6;

const AdminArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [search, setSearch] = useState('');
    const [debounced, setDebounced] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(search);
            setPage(1);
        }, 400);
        return () => clearTimeout(timer);
    }, [search]);

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

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get('/api/categories');
                const names = data.data.map((cat: { name: string }) => cat.name);
                setCategories(names);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        fetchCategories();
    }, []);


    useEffect(() => {
        let filtered = articles;

        if (selectedCategory !== 'all') {
            filtered = filtered.filter((item) => item.category === selectedCategory);
        }

        if (debounced) {
            filtered = filtered.filter((item) =>
                item.title.toLowerCase().includes(debounced.toLowerCase())
            );
        }

        setFilteredArticles(filtered);
    }, [articles, selectedCategory, debounced]);

    const paginated = filteredArticles.slice(
        (page - 1) * ARTICLES_PER_PAGE,
        page * ARTICLES_PER_PAGE
    );

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

    return (
        <div className="flex flex-col min-h-[80vh] justify-between">
            <div>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold">Manage Articles</h2>
                        <p className="text-muted-foreground text-sm">List, search, and manage your articles</p>
                    </div>
                    <Button asChild>
                        <Link href="/dashboard/articles/create">➕ Add Article</Link>
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search article title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:w-[300px]"
                    />
                    <Select
                        value={selectedCategory}
                        onValueChange={(value) => {
                            setSelectedCategory(value);
                            setPage(1);
                        }}
                    >
                        <SelectTrigger className="w-full sm:w-[200px]">
                            <SelectValue placeholder="Filter by category" />
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
                </div>

                <div className="border rounded-md overflow-hidden">
                    {paginated.length === 0 ? (
                        <div className="p-6 text-center text-muted-foreground">No articles found.</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Author</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paginated.map((article) => (
                                    <TableRow key={article.id} className="hover:bg-muted/20">
                                        <TableCell>{article.title}</TableCell>
                                        <TableCell className="capitalize">{article.category.replace('-', ' ')}</TableCell>
                                        <TableCell>{article.author}</TableCell>
                                        <TableCell>{new Date(article.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right">
                                            <Link
                                                href={`/dashboard/articles/edit/${article.id}`}
                                                className="text-sm text-primary hover:underline"
                                            >
                                                Edit
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>

            {totalPages > 1 && (
                <div className="mt-6">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                    className={page === 1 ? 'pointer-events-none opacity-50' : ''}
                                />
                            </PaginationItem>
                            <PaginationItem>
                                <span className="text-sm px-4 py-2">Page {page} of {totalPages}</span>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                    className={page === totalPages ? 'pointer-events-none opacity-50' : ''}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
};

export default AdminArticles;

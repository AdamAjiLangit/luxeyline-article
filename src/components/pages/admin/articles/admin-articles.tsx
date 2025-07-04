'use client';

import React, { useEffect, useState } from 'react';
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

type Props = {
    articles: Article[];
    categories: string[];
};

const AdminArticles: React.FC<Props> = ({ articles, categories }) => {
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
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
        <div className="flex flex-col min-h-[60vh] justify-between px-4 sm:px-6 lg:px-8">
            <div>
                <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold">Manage Articles</h2>
                        <p className="text-muted-foreground text-sm">List, search, and manage your articles</p>
                    </div>
                    <Button asChild className="w-full sm:w-fit">
                        <Link href="/dashboard/articles/create">➕ Add Article</Link>
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <Input
                        placeholder="Search article title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:w-72"
                    />
                    <Select
                        value={selectedCategory}
                        onValueChange={(value) => {
                            setSelectedCategory(value);
                            setPage(1);
                        }}
                    >
                        <SelectTrigger className="w-full sm:w-60">
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

                <div className="w-full overflow-x-auto rounded-md border">
                    <Table className="min-w-[700px]">
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
                                <TableRow key={article.id}>
                                    <TableCell className="max-w-[200px] truncate whitespace-nowrap">
                                        {article.title}
                                    </TableCell>
                                    <TableCell>{article.category}</TableCell>
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
                </div>
            </div>

            {totalPages > 1 && (
                <div className="mt-6 flex justify-center">
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

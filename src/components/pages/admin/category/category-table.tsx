'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
} from '@/components/ui/pagination';
import Link from 'next/link';
import { Category } from '@/types/types';

const CATEGORIES_PER_PAGE = 10;

interface CategoryTableProps {
    initialData: Category[];
}

const CategoryTable: React.FC<CategoryTableProps> = ({ initialData }) => {
    const [categories] = useState<Category[]>(initialData);
    const [filtered, setFiltered] = useState<Category[]>(initialData);
    const [search, setSearch] = useState('');
    const [debounced, setDebounced] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(search);
            setPage(1);
        }, 400);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        let result = categories;
        if (debounced) {
            result = categories.filter((cat) =>
                cat.name.toLowerCase().includes(debounced.toLowerCase())
            );
        }
        setFiltered(result);
    }, [categories, debounced]);

    const paginated = filtered.slice(
        (page - 1) * CATEGORIES_PER_PAGE,
        page * CATEGORIES_PER_PAGE
    );

    const totalPages = Math.ceil(filtered.length / CATEGORIES_PER_PAGE);

    return (
        <div className="flex flex-col min-h-[80vh] justify-between">
            <div>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold">Manage Categories</h2>
                        <p className="text-muted-foreground text-sm">
                            List, search, and manage article categories
                        </p>
                    </div>

                    <Button asChild>
                        <Link href="/dashboard/categories/create">➕ Add Category</Link>
                    </Button>
                </div>

                <div className="w-full sm:w-[300px] mb-6">
                    <Input
                        placeholder="Search category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="border rounded-md overflow-hidden">
                    {paginated.length === 0 ? (
                        <div className="p-6 text-center text-muted-foreground">No categories found.</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Category</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paginated.map((cat) => (
                                    <TableRow key={cat.id} className="hover:bg-muted/20">
                                        <TableCell className="capitalize">{cat.name}</TableCell>
                                        <TableCell className="text-right">
                                            <Link
                                                href={`/dashboard/categories/edit/${cat.id}`}
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

export default CategoryTable;

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { StatCard } from '@/components/pages/admin/dashboard/stat-card';
import { Newspaper, Folder, Users, Eye } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardHome() {
    const [articles, setArticles] = useState<any[]>([]);
    const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const { data } = await axios.get('/api/articles');
                const articlesData = data.data;
                setArticles(articlesData);

                // Ambil kategori unik dari artikel
                const categories = Array.from(new Set(articlesData.map((item: any) => item.category)));
                setUniqueCategories(categories);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    const recentArticles = articles.slice(-2);

    return (
        <div>
            <h2 className="text-2xl font-bold">Welcome back, Admin 👋</h2>
            <p className="text-muted-foreground mb-6">Here&apos;s a quick overview of your content.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Articles" value={articles.length.toString()} icon={<Newspaper className="w-5 h-5" />} />
                <StatCard title="Categories" value={uniqueCategories.length.toString()} icon={<Folder className="w-5 h-5" />} />
                <StatCard title="Users" value="25" icon={<Users className="w-5 h-5" />} />
                <StatCard title="Views Today" value="1.2K" icon={<Eye className="w-5 h-5" />} />
            </div>

            <h3 className="text-lg font-semibold mt-10 mb-3">Recent Articles</h3>
            <ul className="space-y-2">
                {recentArticles.map((article) => (
                    <li key={article.id} className="flex justify-between items-center border-b pb-2">
                        <span>{article.title}</span>
                        <Link href={`/dashboard/articles/edit/${article.id}`} className="text-sm text-primary hover:underline">
                            Edit
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="mt-10 flex gap-4">
                <Button asChild><Link href="/dashboard/articles/create">➕ Add Article</Link></Button>
                <Button asChild variant="secondary"><Link href="/dashboard/categories/create">➕ Add Category</Link></Button>
            </div>
        </div>
    );
}

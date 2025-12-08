import { cookies } from 'next/headers';
import AdminArticles from '@/components/pages/admin/articles/admin-articles';
import { Article } from '@/types/types';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function getData() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    if (session?.user?.role !== 'admin') {
        redirect('/user/articles');
    }

    const articlesRes = await fetch(`${baseUrl}/api/articles`, {
        cache: 'no-store',
        headers: { Cookie: cookies().toString() },
    });

    const categoriesRes = await fetch(`${baseUrl}/api/categories`, {
        cache: 'no-store',
        headers: { Cookie: cookies().toString() },
    });

    const articlesData = await articlesRes.json();
    const categoriesData = await categoriesRes.json();

    return {
        articles: articlesData.data as Article[],
        categories: categoriesData.data.map((c: { name: string }) => c.name),
    };
}

export default async function AdminArticlesPage() {
    const { articles, categories } = await getData();

    return <AdminArticles articles={articles} categories={categories} />;
}

import CreateArticles from "@/components/pages/admin/articles/create-articles";
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function getCategories() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await axios.get(`${baseUrl}/api/categories`);
    return res.data.data.map((c: { name: string }) => c.name);
}

export default async function CreateArticlesPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    if (session?.user?.role !== 'admin') {
        redirect('/user/articles');
    }

    const categories = await getCategories();

    return <CreateArticles categories={categories} />;
}

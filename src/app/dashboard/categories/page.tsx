import CategoryTable from '@/components/pages/admin/category/category-table';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function getCategories() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    try {
        const { data } = await axios.get(`${baseUrl}/api/categories`, {
            headers: { 'Cache-Control': 'no-store' },
        });

        return data.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

export default async function CategoryPage() {
    const categories = await getCategories();
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    if (session?.user?.role !== 'admin') {
        redirect('/user/articles');
    }

    return <CategoryTable initialData={categories} />;
}

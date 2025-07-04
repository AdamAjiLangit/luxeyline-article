import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ArticleDetail from '@/components/pages/articles/article-detail';

export default async function ArticleDetailPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    if (session?.user?.role === 'admin') {
        redirect('/dashboard');
    }

    return <ArticleDetail />;
}

import CreateCategoryForm from "@/components/pages/admin/category/create-category";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
export const dynamic = 'force-dynamic';

export default async function CreateCategoryPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    if (session?.user?.role !== 'admin') {
        redirect('/user/articles');
    }
    return <CreateCategoryForm />;
}

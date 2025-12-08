'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { CategoryFormValues, categorySchema } from '@/validators/categorySchema';

export default function EditCategory() {
    const router = useRouter();
    const params = useParams();
    const categoryId = params.id;
    const { data: session } = useSession();

    const form = useForm<CategoryFormValues>({
        resolver: zodResolver(categorySchema),
        defaultValues: { name: '' },
    });

    const { setValue } = form;

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const { data } = await axios.get(`/api/categories/${categoryId}`);
                setValue('name', data.data.name);
            } catch (error) {
                toast.error('Failed to load category');
                console.log('Error fetching category:', error);
            }
        };

        fetchCategory();
    }, [categoryId, setValue]);

    const onSubmit = async (values: CategoryFormValues) => {
        try {
            await axios.put(`/api/categories/${categoryId}`, values);
            toast.success('Category updated successfully!');
            router.push('/dashboard/categories');
        } catch (error) {
            toast.error('Failed to update category');
            console.error(error);
        }
    };

    if (!session) {
        redirect('/login');
    }

    if (session?.user?.role !== 'admin') {
        redirect('/user/articles');
    }

    return (
        <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">✏️ Edit Category</h2>
            <p className="text-muted-foreground mb-6">Update an existing article category.</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="name">Category Name</Label>
                                <FormControl>
                                    <Input id="name" placeholder="e.g. design, investment" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Saving...' : 'Save Changes'}
                    </Button>
                </form>
            </Form>
        </div>
    );
}

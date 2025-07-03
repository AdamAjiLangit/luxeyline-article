'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
    name: z.string().min(1, 'Category name is required'),
});

export default function EditCategory() {
    const router = useRouter();
    const params = useParams();
    const categoryId = params.id;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
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

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.put(`/api/categories/${categoryId}`, values);
            toast.success('Category updated successfully!');
            router.push('/dashboard/categories');
        } catch (error) {
            toast.error('Failed to update category');
            console.error(error);
        }
    };

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

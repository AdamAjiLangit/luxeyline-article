'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { CategoryFormValues, categorySchema } from '@/validators/categorySchema';

export default function CreateCategoryForm() {
    const router = useRouter();
    const form = useForm<CategoryFormValues>({
        resolver: zodResolver(categorySchema),
        defaultValues: { name: '' },
    });

    const onSubmit = async (values: CategoryFormValues) => {
        try {
            await axios.post('/api/categories', values);
            toast.success('Category created successfully!');
            router.push('/dashboard/categories');
        } catch (error) {
            console.error(error);
            toast.error('Failed to create category.');
        }
    };

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-2">➕ Create Category</h2>
            <p className="text-muted-foreground mb-6">Add a new article category to organize your content.</p>

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
                        {form.formState.isSubmitting ? 'Saving...' : 'Create'}
                    </Button>
                </form>
            </Form>
        </div>
    );
}

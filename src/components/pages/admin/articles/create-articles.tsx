'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { articleFormSchema, ArticleFormValues } from '@/validators/articleSchema';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false });

interface CreateArticlesProps {
    categories: string[];
}

export default function CreateArticles({ categories }: CreateArticlesProps) {
    const router = useRouter();
    const [preview, setPreview] = useState(false);

    const form = useForm<ArticleFormValues>({
        resolver: zodResolver(articleFormSchema),
        defaultValues: {
            title: '',
            description: '',
            thumbnail: '',
            category: '',
            author: '',
            fullContent: '',
        },
    });

    const onSubmit = async (values: ArticleFormValues) => {
        try {
            await axios.post('/api/articles', values);
            toast.success('Article created successfully!');
            router.push('/dashboard/articles');
        } catch (error) {
            toast.error('Failed to create article.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">➕ Create Article</h2>
            <p className="text-muted-foreground mb-6">Write a new article to be displayed on the news page.</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <Label>Title</Label>
                                <FormControl><Input placeholder="Article title..." {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <Label>Description</Label>
                                <FormControl><Input placeholder="Short description..." {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="thumbnail"
                        render={({ field }) => (
                            <FormItem>
                                <Label>Thumbnail URL</Label>
                                <FormControl><Input placeholder="https://example.com/image.jpg" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <Label>Category</Label>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem key={cat} value={cat}>{cat.replace('-', ' ')}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <Label>Author</Label>
                                <FormControl><Input placeholder="Author name" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="fullContent"
                        render={({ field }) => (
                            <FormItem>
                                <Label>Full Content (Markdown)</Label>
                                <FormControl>
                                    <MdEditor
                                        value={field.value}
                                        style={{ height: '400px' }}
                                        renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
                                        onChange={({ text }) => field.onChange(text)}
                                        placeholder="Write your markdown article here..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex gap-4">
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Saving...' : 'Create'}
                        </Button>
                        <Button type="button" variant="secondary" onClick={() => setPreview((prev) => !prev)}>
                            {preview ? 'Hide Preview' : 'Preview'}
                        </Button>
                    </div>
                </form>
            </Form>

            {preview && (
                <div className="mt-10 p-6 border rounded-md bg-muted/30">
                    <h3 className="text-xl font-semibold mb-2">{form.watch('title')}</h3>
                    <p className="text-muted-foreground mb-4">{form.watch('description')}</p>
                    <Image src={form.watch('thumbnail')} alt="Preview" className="mb-4 max-h-80 rounded-md" width={500} height={300} />
                    <article className="prose prose-lg max-w-none">
                        <ReactMarkdown>{form.watch('fullContent')}</ReactMarkdown>
                    </article>
                </div>
            )}
        </div>
    );
}

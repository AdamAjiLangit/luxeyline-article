'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { articleFormSchema, ArticleFormValues } from '@/validators/articleSchema';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false });

export default function EditArticles() {
    const { id } = useParams();
    const router = useRouter();
    const { data: session } = useSession();

    const [categories, setCategories] = useState<string[]>([]);
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

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const { data } = await axios.get(`/api/articles/${id}`);
                form.reset(data.data);
            } catch (err) {
                toast.error('Failed to load article');
                console.log(err);
            }
        };

        const fetchCategories = async () => {
            try {
                const { data } = await axios.get('/api/categories');
                setCategories(data.data.map((cat: { name: string }) => cat.name));
            } catch (err) {
                console.error(err);
            }
        };

        if (id) {
            fetchArticle();
            fetchCategories();
        }
    }, [id, form]);

    const onSubmit = async (values: ArticleFormValues) => {
        try {
            await axios.put(`/api/articles/${id}`, values);
            toast.success('Article updated!');
            router.push('/dashboard/articles');
        } catch (err) {
            console.error(err);
            toast.error('Failed to update article');
        }
    };

    if (!session) {
        redirect('/login');
    }

    if (session?.user?.role !== 'admin') {
        redirect('/user/articles');
    }

    return (
        <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">✏️ Edit Article</h2>
            <p className="text-muted-foreground mb-6">Modify existing article details</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl><Textarea rows={3} {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="thumbnail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Thumbnail URL</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((cat) => (
                                                <SelectItem key={cat} value={cat}>
                                                    {cat.replace('-', ' ')}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
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
                            {form.formState.isSubmitting ? 'Saving...' : 'Update Article'}
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => setPreview((prev) => !prev)}
                        >
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

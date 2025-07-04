import { z } from 'zod';

export const articleFormSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    thumbnail: z.string().url('Thumbnail must be a valid URL'),
    category: z.string().min(1, 'Category is required'),
    author: z.string().min(1, 'Author is required'),
    fullContent: z.string().min(1, 'Full content is required'),
});

export type ArticleFormValues = z.infer<typeof articleFormSchema> & {
    id?: string;
};
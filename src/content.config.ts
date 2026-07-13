import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    dek: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    image: z.string().optional(),
    publisher: z.string().optional(),
    accent: z.number(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'articles': articles,
};

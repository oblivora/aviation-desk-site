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
    imageCredit: z.string().optional(),
    publisher: z.string().optional(),
    publisherImage: z.string().optional(),
    accent: z.number(),
    featured: z.boolean().optional(),
    // Video / Live Stream
    videoUrl: z.string().optional(),
    videoFile: z.string().optional(),
    videoCaption: z.string().optional(),
    videoPosition: z.enum(['body', 'end']).optional().default('end'),
    // Social Media Embed
    socialPostUrl: z.string().optional(),
    socialPostCaption: z.string().optional(),
    // Event Location
    locationName: z.string().optional(),
    locationAddress: z.string().optional(),
    locationWebsite: z.string().optional(),
    locationHours: z.string().optional(),
    locationMapQuery: z.string().optional(),
    locationContact: z.string().optional(),
  }),
});

export const collections = {
  'articles': articles,
};

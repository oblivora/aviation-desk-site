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
    // Market / Ticker Updates
    marketUpdates: z.array(z.object({
      symbol: z.string(),
      value: z.string(),
      change: z.string(),
      trend: z.enum(['up', 'down', 'neutral']),
    })).optional(),
    // Social Media Embeds (multiple posts)
    socialPosts: z.array(z.object({
      url: z.string(),
      caption: z.string().optional(),
    })).optional(),
    // Legacy single social post (backwards compat)
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

const liveEvents = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/liveEvents" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    isActive: z.boolean().optional().default(true),
    category: z.string(),
    dek: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    readTime: z.string().optional(),
    image: z.string().optional(),
    imageCredit: z.string().optional(),
    publisher: z.string().optional(),
    publisherImage: z.string().optional(),
    accent: z.number(),
    videoUrl: z.string().optional(),
    videoFile: z.string().optional(),
    videoCaption: z.string().optional(),
    marketUpdates: z.array(z.object({
      symbol: z.string(),
      value: z.string(),
      change: z.string(),
      trend: z.enum(['up', 'down', 'neutral']),
    })).optional(),
    socialPosts: z.array(z.object({
      url: z.string(),
      caption: z.string().optional(),
    })).optional(),
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
  'liveEvents': liveEvents,
};

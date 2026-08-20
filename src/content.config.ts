import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    meta: z.string(),
    description: z.string(),
    art: z.enum(['sun', 'tiles', 'bottle', 'play', 'table', 'bramble']),
    number: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };


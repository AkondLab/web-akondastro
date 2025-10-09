import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    logo: z.string(),
    url: z.string(),
    order: z.number(),
  }),
});

const partners = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    logo: z.string(),
    url: z.string(),
    filter: z.string().optional(),
    order: z.number(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    logo: z.string().optional(),
    externalUrl: z.string().optional(),
  }),
});

export const collections = {
  projects,
  partners,
  pages,
};
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

export const collections = {
  projects,
  partners,
};
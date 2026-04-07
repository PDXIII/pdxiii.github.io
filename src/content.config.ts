import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const nowCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/now" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.date(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    teaser: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
  }),
});

const articlesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    isDraft: z.boolean(),
    isFeatured: z.boolean().optional(),
    image: z.string().optional(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
  }),
});

export const collections = {
  now: nowCollection,
  projects: projectsCollection,
  articles: articlesCollection,
};

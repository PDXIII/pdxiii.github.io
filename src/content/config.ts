// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const nowCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.date(),
  }),
});
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    teaser: z.string(),
    publishedAt: z.date(),
    undefined: z.date().optional(),
  }),
});
const articlesCollection = defineCollection({
  type: "content",
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
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  now: nowCollection,
  projects: projectsCollection,
  articles: articlesCollection,
};

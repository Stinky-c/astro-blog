import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        created: z.date(),
        modified: z.date(),
        author: z.string(),
    }),
});

export const collections = { blog };

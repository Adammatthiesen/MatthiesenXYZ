import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        draft: z.boolean().optional(),
        updatedDate: z.string().optional(),
        heroImage: z.string().optional(),
        badge: z.string().optional(),
        tags: z.array(z.string()),
}) 

const hddSchema = z.object({
        serial: z.string(),
        make: z.string(),
        model: z.string(),
        badge: z.string().optional(),
        capacity: z.string(),
        size: z.string(),
        type: z.string(),
        reportDate: z.coerce.date(),
        manuDate: z.coerce.date().optional(),
        pdf: z.boolean().optional(),
        isSSD: z.boolean(),
    });

// EXPORT SCHEMA
export type BlogSchema = z.infer<typeof blogSchema>;
export type HddSchema = z.infer<typeof hddSchema>;
// COLLECTION IS SCHEMA
const blogCollection = defineCollection({ schema: blogSchema });
const hddreportsCollection = defineCollection({ type: "data", schema: hddSchema });
// EXPORT COLLECTIONS
export const collections = { 'blog': blogCollection, 'hddreports': hddreportsCollection, }
import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        draft: z.boolean().optional(),
        updatedDate: z.string().optional(),
        heroImage: z.string().optional(),
        badge: z.string().optional(),
        blogbadge: z.string().optional(),
        tutorialbadge: z.string().optional(),
        projectbadge: z.string().optional(),
        tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
            message: 'tags must be unique',}).optional(),
    });

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

export type BlogSchema = z.infer<typeof blogSchema>;
export type HddSchema = z.infer<typeof hddSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const hddreportsCollection = defineCollection({ schema: hddSchema });

// Allows use of Collections elsewhere
export const collections = {
    'blog': blogCollection,
    'hddreports': hddreportsCollection,
}
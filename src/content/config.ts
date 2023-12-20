import { dateTimeFormat } from "astro/dist/core/logger/core";
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
});
const hddSchema = z.object({
    serial: z.string(),
    make: z.string(),
    model: z.string(),
    badge: z.string().optional(),
    capacity: z.string(),
    type: z.string(),
    reportDate: z.coerce.date(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type hddSchema = z.infer<typeof hddSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const hddreportsCollection = defineCollection({ schema: hddSchema });

export const collections = {
    'blog': blogCollection,
    'hddreports': hddreportsCollection,
}
import * as z from "zod";

const skillSchema = z.object({
    value: z.string(),
});

export const profileSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(3),
    email: z.string().email(),
    about: z.string(),
    skills_interested: z.array(skillSchema).default([]),
    my_skills: z.array(skillSchema).default([]),
});

export type ProfileFormI = z.infer<typeof profileSchema>;

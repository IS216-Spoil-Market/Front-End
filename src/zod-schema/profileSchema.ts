import * as z from "zod";

const skillSchema = z.object({
    value: z.string(),
});

export const profileSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    about: z.string().min(3),
    skills_interested: z.array(skillSchema).default([]),
    my_skills: z.array(skillSchema).default([]),
});

export type ProfileFormI = z.infer<typeof profileSchema>;

import * as z from "zod";

export const reviewSchema = z.object({
    review_of_user: z
        .string()
        .min(5, "Review must be at least 5 characters long"),
    rating: z.number().min(0.5, "Please input a rating for this user"),
});

// Export the type inferred from the schema
export type ReviewFormI = z.infer<typeof reviewSchema>;

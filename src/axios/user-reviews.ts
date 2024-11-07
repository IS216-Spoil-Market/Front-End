import { UserDetails } from "../types/userDetails";
import { reviewInstance } from "./client";

export const getReviewsById = async (id: string) => {
    const { data } = await reviewInstance.get(`/${id}`);
    return data as UserDetails;
}
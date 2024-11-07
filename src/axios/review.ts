import { Review } from "../types/review";
import { reviewInstance } from "./client";

export const createReview = async (reviewData: Review) => {
    const { data } = await reviewInstance.post("/", reviewData);
    return data as Review;
}

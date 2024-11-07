import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { createReview } from "../../../axios/review";
import { Review } from "../../../types/review";

const usePostReview = () => {

    return useMutation({
        mutationFn: (reviewData: Review) => createReview(reviewData),
        onSuccess: () => {
            enqueueSnackbar("Review Posted Successfully!", {
                variant: "success",
            });
        },
        onError: (error) => {
            console.error("Error in custom hook ", error)
            enqueueSnackbar("Failed to post review, please try again!", {
                variant: "error",
            });
        }
    });
};

export default usePostReview;
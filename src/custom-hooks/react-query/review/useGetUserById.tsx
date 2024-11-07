import { useQuery } from "@tanstack/react-query";
import { getReviewsById } from "../../../axios/user-reviews";

// cache id in front end 
const useGetUserById = (id?: string) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => getReviewsById(id ?? ""), 
        enabled: !!id,
    });
}

export default useGetUserById;
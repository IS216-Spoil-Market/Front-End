import { useQuery } from "@tanstack/react-query";
import {  getUsersBySkill } from "../../../axios/profile";

const useGetUsers = (skill?: string) => {
    return useQuery({
        queryKey: ["users", skill],
        queryFn: () => getUsersBySkill(skill ?? ""),
    });
};

export default useGetUsers;

import { useQuery } from "@tanstack/react-query";
import { getChats } from "../../../axios/chat";

const useChats = () => {
    return useQuery({
        queryKey: ["chat"],
        queryFn: getChats,
    });
};

export default useChats;

import { useQuery } from "@tanstack/react-query";
import { getAllMessagesByChatId } from "../../../axios/chat";

const useMessages = (id?: string) => {
    return useQuery({
        queryKey: ["message", id],
        queryFn: () => getAllMessagesByChatId(id ?? ""),
        enabled: !!id,
    });
};

export default useMessages;

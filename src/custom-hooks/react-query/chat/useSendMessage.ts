import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../../../axios/chat";
import { enqueueSnackbar } from "notistack";

const useSendMessage = (chatId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (content: string) => sendMessage(chatId, content),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["message", chatId],
            });
        },
        onError: () => {
            enqueueSnackbar("An error has occured, please try again", {
                variant: "error",
            });
        },
    });
};

export default useSendMessage;

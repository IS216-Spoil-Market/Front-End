import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../../../axios/chat";
import { enqueueSnackbar } from "notistack";
import { socket } from "../../../constants/socket";

const useSendMessage = (chatId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (content: string) => sendMessage(chatId, content),
        onSuccess: () => {
            //post new message
            queryClient.invalidateQueries({
                queryKey: ["message", chatId],
            });
            //send "new message" event to server
            socket.emit('new message', chatId);
        },
        onError: () => {
            enqueueSnackbar("An error has occured, please try again", {
                variant: "error",
            });
        },
    });
};

export default useSendMessage;

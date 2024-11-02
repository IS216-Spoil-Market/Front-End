import SendIcon from "@mui/icons-material/Send";
import { Box, IconButton } from "@mui/material";
import { drawerWidth } from "../../constants/chatAppBar";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "../common/form/TextField";
import useSendMessage from "../../custom-hooks/react-query/chat/useSendMessage";

interface MessageInputProps {
    open: boolean;
    chatId: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ open, chatId }) => {
    const formState = useForm<{ message: string }>();
    const { reset, watch } = formState;
    const { mutate } = useSendMessage(chatId);
    const message = watch("message");

    return (
        <Box
            sx={{
                marginLeft: open ? `${drawerWidth}px` : 0,
                width: `calc(100% - ${open ? drawerWidth : 0}px)`,
                padding: 2,
                display: "flex",
                position: "fixed",
                bgcolor: "white",
                bottom: 0,
                flexDirection: "row",
            }}
        >
            <FormProvider {...formState}>
                <TextField
                    fullWidth
                    name="message"
                    placeholder="Type something..."
                    variant="standard"
                    onKeyUp={({ key }) => {
                        if (key === "Enter") {
                            mutate(message);
                            reset();
                        }
                    }}
                />
            </FormProvider>
            <IconButton
                disabled={message === "" ? true : false}
                onClick={() => {
                    mutate(message);
                    reset();
                }}
            >
                <SendIcon />
            </IconButton>
        </Box>
    );
};

export default MessageInput;

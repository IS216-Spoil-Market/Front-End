import SendIcon from "@mui/icons-material/Send";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { drawerWidth } from "../../constants/chatAppBar";

interface MessageInputProps {
    open: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ open }) => {
    const [message, setMessage] = useState("");

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
            <TextField
                fullWidth
                placeholder="Type something..."
                variant="standard"
                onChange={({ target: { value } }) => {
                    setMessage(value);
                }}
            />
            <IconButton
                disabled={message === "" ? true : false}
                onClick={() => console.log(message)}
            >
                <SendIcon />
            </IconButton>
        </Box>
    );
};

export default MessageInput;

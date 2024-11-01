import {
    Box,
    ListItem,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

interface ChatBubbleProps {
    message: string;
    type: "sender" | "receiver";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, type }) => {
    const theme = useTheme();
    const isAboveMedium = useMediaQuery(theme.breakpoints.up("md"));
    const [variant, flex] =
        type === "sender" ? ["secondary", "end"] : ["primary", "start"];

    return (
        <ListItem
            sx={{
                display: "flex",
                direction: "row",
                width: "100%",
                justifyContent: flex,
            }}
        >
            <Box
                sx={{
                    backgroundColor: `${variant}.light`,
                    maxWidth: isAboveMedium ? "75%" : "90%",
                    px: 2,
                    py: 1,
                    borderRadius: 16,
                }}
            >
                <Typography color="white" display="inline-block" component="div">
                    {message}
                </Typography>
            </Box>
        </ListItem>
    );
};

export default ChatBubble;

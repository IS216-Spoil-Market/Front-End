import { useAuth0 } from "@auth0/auth0-react";
import { Box, List } from "@mui/material";
import useMessages from "../../custom-hooks/react-query/chat/useMessagges";
import { ChatItem } from "../../types/chat";
import ChatBubble from "./ChatBubble";

interface ChatDisplayProps {
    currentChat?: ChatItem;
}

const ChatDisplay: React.FC<ChatDisplayProps> = ({ currentChat }) => {
    const { data: messages } = useMessages(currentChat?.id);
    const { user } = useAuth0();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column-reverse",
                minHeight: "100%",
            }}
        >
            <List>
                {currentChat &&
                    messages?.map((message, index) => (
                        <ChatBubble
                            key={index}
                            message={message.content}
                            type={
                                message.sender.name !== user?.name
                                    ? "sender"
                                    : "receiver"
                            }
                        />
                    ))}
            </List>
        </Box>
    );
};

export default ChatDisplay;

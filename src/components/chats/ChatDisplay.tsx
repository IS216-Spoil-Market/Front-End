import { useAuth0 } from "@auth0/auth0-react";
import { Box, List } from "@mui/material";
import useMessages from "../../custom-hooks/react-query/chat/useMessagges";
import { ChatItem } from "../../types/chat";
import ChatBubble from "./ChatBubble";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { socket } from "../../constants/socket";

interface ChatDisplayProps {
	currentChat?: ChatItem;
}

/* 
    To-Do:
    - change hardcoded endpoint?
*/

const ChatDisplay: React.FC<ChatDisplayProps> = ({ currentChat }) => {
	const { data: messages } = useMessages(currentChat?.id);
	const { user } = useAuth0();
	const queryClient = useQueryClient();

	useEffect(() => {
        //connect to socket in socket.ts
		socket.on("connected", () => console.log("socket connected!"));
        //upon "message received" event, query for latest messages
		socket.on("message received", (chatId) => {
			queryClient.invalidateQueries({ queryKey: ["message", chatId] });
		});
        return () => {
            // Clean up the socket listener
			socket.off("connected");
            socket.off("message received")
		};
	});

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

import { useAuth0 } from "@auth0/auth0-react";
import { Box, List } from "@mui/material";
import useMessages from "../../custom-hooks/react-query/chat/useMessagges";
import { ChatItem } from "../../types/chat";
import ChatBubble from "./ChatBubble";
import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { socket } from "../../constants/socket";

interface ChatDisplayProps {
	currentChat?: ChatItem;
}

const ChatDisplay: React.FC<ChatDisplayProps> = ({ currentChat }) => {
	const { data: messages } = useMessages(currentChat?.id);
	const { user } = useAuth0();
	const queryClient = useQueryClient();
	const latestMessageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		//connect to socket in socket.ts
		// socket.on("connected", () => console.log("socket connected!"));
		//upon "message received" event, query for latest messages
		socket.on("message received", (chatId) => {
			queryClient.invalidateQueries({ queryKey: ["message", chatId] });
		});
		return () => {
			// Clean up the socket listener
			socket.off("connected");
			socket.off("message received");
		};
	});

	useEffect(() => {
		// Scroll to the latest message when `messages` change (new message received)
		if (latestMessageRef.current) {
			latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column-reverse",
				minHeight: "100%",
				pb: 10, //added som padding so the latest message doesn't get covered by the MessageInput component
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
				<div ref={latestMessageRef}></div>
			</List>
		</Box>
	);
};

export default ChatDisplay;

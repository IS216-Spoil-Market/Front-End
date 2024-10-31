import { Box, Stack } from "@mui/material";
import TopBar from "./TopBar";
import wallpaper from "../../assets/images/home/hero-banner.jpg";
import MessageInput from "./MessageInput";
import ChatBubble from "./ChatBubble";

interface ChatDisplayProps {
	userId: number;
}

const ChatDisplay: React.FC<ChatDisplayProps> = ({ userId }) => {
	const messages = [
		{ text: "hi", id: 1 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 0 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 0 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 0 },
		{ text: "hi", id: 0 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 1 },
		{ text: "hi", id: 0 },
		{ text: "hi", id: 1 },
	];
	// const displayedMessages = messages.slice(-10);

	return (
		<Box
			sx={{
				overflow: "auto",
				height: "100vh",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				backgroundImage: `url(${wallpaper})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<TopBar userId={userId} />
			<Stack direction={"column"} sx={{ flexGrow: 1 }}>
				{messages.map((message, index) => (
					<ChatBubble
						key={index}
						message={message.text}
						type={message.id != userId ? "sender" : "receiver"}
					></ChatBubble>
				))}
			</Stack>
			<MessageInput></MessageInput>
		</Box>
	);
};

export default ChatDisplay;

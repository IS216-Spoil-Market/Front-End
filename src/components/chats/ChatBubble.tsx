import { ListItem, ListItemText } from "@mui/material";

interface ChatBubbleProps {
	message: string;
	type: "sender" | "receiver";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, type }) => {
	const theme =
		type === "sender" ? ["secondary", "start"] : ["primary", "end"];

	return (
		<ListItem
			sx={{
				backgroundColor: `${theme[0]}.light`,
				borderRadius: 16,
				maxWidth: "50%",
				margin: 2,
				textAlign: `${theme[1]}`,
				alignSelf: `flex-${theme[1]}`,
			}}
		>
			<ListItemText>{message}</ListItemText>
		</ListItem>
	);
};

export default ChatBubble;

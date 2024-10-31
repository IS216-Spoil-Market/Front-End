import React, { useEffect, useState } from "react";
import ChatDisplay from "../components/chats/ChatDisplay";
import { List, Stack } from "@mui/material";
import ListingItem from "../components/chats/ListingItem";

interface ChatsProps {}

/**
 * TO-DO:
 * - get list of users
 * - add callback to change ChatDisplay when user clicks on a listitem
 */

const Chats: React.FC<ChatsProps> = ({}) => {

    const users = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

    const [chatId, setChatId] = useState(1);

	return (
		<Stack direction="row">
			<List
				sx={{
					overflow: "auto",
					maxHeight: "100vh",
					maxWidth: "30vw",
					display: { xs: "none", md: "block" },
				}}
			>
				{users.map((userId, i) => {
					return <ListingItem key={i} userId={userId} setChatId={setChatId}/>;
				})}
			</List>
			<ChatDisplay userId={chatId} />
		</Stack>
	);
};

export default Chats;

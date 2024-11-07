import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import React, { SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface ChatToolBarProps {
	open: boolean;
	setOpen: (value: SetStateAction<boolean>) => void;
	isAboveMedium: boolean;
	activeChat: string;
	receiverId: string;
}

const ChatToolBar: React.FC<ChatToolBarProps> = ({
	open,
	setOpen,
	isAboveMedium,
	activeChat,
	receiverId,
}) => {
	const navigate = useNavigate();

	return (
		<Toolbar
			sx={{
				display: "flex",
				direction: "row",
				justifyContent: "space-between",
			}}
		>
			{!isAboveMedium && (
				<IconButton
					onClick={() => setOpen(true)}
					edge="start"
					sx={[
						{
							mr: 2,
						},
						open && { display: "none" },
					]}
				>
					<MenuIcon sx={{ color: "black" }} />
				</IconButton>
			)}
			{(!open || isAboveMedium) && (
				<>
					<Typography variant="h6" noWrap component="div">
						{activeChat}
					</Typography>
					<Button
						onClick={() => navigate(`/user/${receiverId}`)}
						color="primary"
						variant="contained"
					>
						View Profile
					</Button>
				</>
			)}
		</Toolbar>
	);
};

export default ChatToolBar;

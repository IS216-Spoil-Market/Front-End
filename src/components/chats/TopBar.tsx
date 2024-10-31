import {
	AppBar,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
	userId: number;
}

/**
 * TO-DO:
 * - get username by userid & populate AppBar
 */

const TopBar: React.FC<TopBarProps> = ({ userId }) => {
	const navigate = useNavigate();

	return (
		<AppBar position="sticky" sx={{ backgroundColor: "#eeeeee" }}>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					aria-label="menu"
					sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant="h6"
					color="black"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					User1
				</Typography>
				<Button
					color="primary"
					variant="contained"
					onClick={() => navigate(`/user/:${userId}`)}
				>
					View Profile
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;

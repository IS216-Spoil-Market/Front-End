import {
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Tooltip,
    Avatar,
    AppBar as MuiAppBar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SwaplyLogo from "../../../assets/images/logo/white.png";
import { useNavigate } from "react-router-dom";

interface AppBarProps {
    position: "absolute" | "static";
}

const pages = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "Discover",
        route: "/user",
    },
    {
        name: "Chats",
        route: "/chat",
    },
];

const AppBar: React.FC<AppBarProps> = ({ position }) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const navigate = useNavigate();

    return (
        <MuiAppBar
            sx={
                position === "static"
                    ? {}
                    : { bgcolor: "rgba(0,0,0,0)", boxShadow: "none" }
            }
            position={position}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={(event) => {
                                setAnchorElNav(event.currentTarget);
                            }}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => {
                                setAnchorElNav(null);
                            }}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map(({ name, route }) => (
                                <MenuItem
                                    key={name}
                                    onClick={() => navigate(route)}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        {name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <img
                        src={SwaplyLogo}
                        style={{ width: 128, height: "auto" }}
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            flexDirection: "row",
                            justifyContent: "end",
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map(({ name, route }) => (
                            <Button
                                key={name}
                                onClick={() => navigate(route)}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                <Typography variant="h6">{name}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            flexGrow: { xs: 1, md: 0 },
                            justifyContent: "end",
                            display: "flex",
                        }}
                    >
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={() => navigate("/profile")}
                                sx={{ p: 0 }}
                            >
                                {/* To be modified to use actual pfp */}
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </MuiAppBar>
    );
};

export default AppBar;

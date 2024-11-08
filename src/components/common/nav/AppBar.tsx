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
import { useAuth0 } from "@auth0/auth0-react";
import PlaceholderImage from "../../../assets/images/user-placeholder.png"

interface AppBarProps {
    invisBg?: boolean;
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

const AppBar: React.FC<AppBarProps> = ({ invisBg }) => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const navigate = useNavigate();

    return (
        <MuiAppBar
            sx={invisBg ? { bgcolor: "rgba(0,0,0,0)", boxShadow: "none" } : {}}
            position="static"
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
                            {isAuthenticated &&
                                pages.map(({ name, route }) => (
                                    <MenuItem
                                        key={name}
                                        onClick={() => navigate(route)}
                                    >
                                        <Typography
                                            sx={{ textAlign: "center" }}
                                        >
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
                        {isAuthenticated &&
                            pages.map(({ name, route }) => (
                                <Button
                                    key={name}
                                    onClick={() => navigate(route)}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
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
                        <Tooltip title="Profile">
                            <IconButton sx={{ p: 0 }} onClick={() => isAuthenticated ? navigate("/profile"): loginWithRedirect()}>
                                {!isAuthenticated ? (
                                    <Avatar
                                        alt="user-avatar"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                ) : user?.picture ? (
                                    <img
                                        width={50}
                                        height={50}
                                        style={{ borderRadius: 100 }}
                                        alt="user-avatar"
                                        src={user.picture ?? PlaceholderImage}
                                        referrerPolicy="no-referrer"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = PlaceholderImage;
                                        }}
                                    />
                                ) : (
                                    <Avatar
                                        alt="user-avatar"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                )}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </MuiAppBar>
    );
};

export default AppBar;

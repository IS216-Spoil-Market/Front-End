import { useAuth0 } from "@auth0/auth0-react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroBanner from "../assets/images/home/hero-banner.jpg";
import ChatDisplay from "../components/chats/ChatDisplay";
import ChatDrawerContents from "../components/chats/drawer/ChatDrawerContents";
import MessageInput from "../components/chats/MessageInput";
import ChatAppbar from "../components/chats/nav/ChatAppbar";
import ChatToolBar from "../components/chats/nav/ChatToolbar";
import ChatMain from "../components/chats/section/ChatMain";
import { drawerWidth } from "../constants/chatAppBar";
import useChats from "../custom-hooks/react-query/chat/useChats";
import useScroll from "../custom-hooks/window/useScroll";

interface ChatsProps {}

const Chats: React.FC<ChatsProps> = ({}) => {
    // For styling purposes
    const theme = useTheme();
    const isAboveMedium = useMediaQuery(theme.breakpoints.up("md"));
    const offsetY = useScroll();
    useEffect(() => {
        isAboveMedium ? setOpen(true) : setOpen(false);
    }, [isAboveMedium]);

    // Data fetching
    const { data: chats } = useChats();
    const { user } = useAuth0();

    // For keeping track of currently active chat
    useEffect(() => {
        if (chats && chats.length > 0) setSelected(chats[0].id);
    }, [chats]);

    // For handling states
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <Box
            sx={{
                height: `calc(100vh - 76px)`,
            }}
        >
            <Box
                width="100vw"
                height="100vh"
                sx={{ background: `url(${HeroBanner}) no-repeat fixed center` }}
            >
                <Box
                    width="100vw"
                    height="100vh"
                    sx={{ background: "rgba(0,0,0,0.6)" }}
                >
                    <ChatAppbar
                        position="sticky"
                        sx={{ bgcolor: "white", color: "black" }}
                        open={open}
                    >
                        <ChatToolBar
                            {...{
                                open,
                                setOpen,
                                isAboveMedium,
                                // Can consider memoizing the current receiver and sender using useMemo for code clarity
                                activeChat:
                                    chats
                                        ?.find((chat) => chat.id === selected)
                                        ?.users.find(
                                            (chatUser) =>
                                                chatUser.email !== user?.email
                                        )?.name ?? "Default",
                                receiverId:
                                    chats
                                        ?.find((chat) => chat.id === selected)
                                        ?.users.find(
                                            (chatUser) =>
                                                chatUser.email !== user?.email
                                        )?.id ?? "",
                            }}
                        />
                    </ChatAppbar>

                    {/**
                     * The list of chats available
                     * Note that this component cannot be moved into another file. It will break
                     */}
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                top: isAboveMedium
                                    ? Math.max(76 - offsetY, 0)
                                    : 0, // To make the drawer below the global top bar
                                width: drawerWidth,
                                boxSizing: "border-box",
                            },
                        }}
                        variant={isAboveMedium ? "persistent" : "temporary"}
                        anchor="left"
                        open={open}
                    >
                        <ChatDrawerContents
                            {...{
                                setOpen,
                                chats,
                                isAboveMedium,
                                selected,
                                setSelected,
                            }}
                        />
                    </Drawer>

                    {/* The main chatting section */}
                    <ChatMain
                        open={open}
                        sx={{
                            marginLeft: {
                                xs: 0,
                                md: open ? `${drawerWidth}px` : 0,
                            },
                            maxHeight: "100vh",
                            overflowY: "scroll",
                        }}
                    >
                        <ChatDisplay
                            currentChat={chats?.find(
                                (chat) => chat.id === selected
                            )}
                        />
                    </ChatMain>
                    <MessageInput open={open} />
                </Box>
            </Box>
        </Box>
    );
};

export default Chats;

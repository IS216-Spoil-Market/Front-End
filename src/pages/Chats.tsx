import { useAuth0 } from "@auth0/auth0-react";
import { Drawer, Theme, useMediaQuery } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ChatBackgroundContainer from "../components/chats/ChatBackgroundContainer";
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

/* 
    To-Do:
    - change hardcoded endpoint?
    - update chat list when message is sent
    - remove aria-hidden errors
*/

const Chats: React.FC<ChatsProps> = ({}) => {
    // For styling purposes
    const isAboveMedium = useMediaQuery((theme) =>
        (theme as Theme).breakpoints.up("md")
    );
    const offsetY = useScroll();

    // Data fetching
    const { data: chats } = useChats();
    const { user } = useAuth0();

    // For handling states
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    // Modify drawer state to default to open when screen is wide and close when narrow
    useEffect(() => {
        isAboveMedium ? setOpen(true) : setOpen(false);
    }, [isAboveMedium]);

    // For keeping track of currently active chat
    useEffect(() => {
        if (chats && chats.length > 0) setSelected(chats[0].id);
    }, [chats]);

    // Compute and find the user who is not the author based on each chat's users array
    const [currentChat, receiver] = useMemo(() => {
        const currentChat = chats?.find((chat) => chat.id === selected);
        const receiver = currentChat?.users.find(
            (chatUser) => chatUser.email !== user?.email
        );

        return [
            currentChat,
            { id: receiver?.id ?? "", name: receiver?.name ?? "Default" },
        ];
    }, [user, chats, selected]);

    return (
        <ChatBackgroundContainer>
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
                        activeChat: receiver.name,
                        receiverId: receiver.id,
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
                        top: isAboveMedium ? Math.max(76 - offsetY, 0) : 0, // To make the drawer below the global top bar
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
                <ChatDisplay currentChat={currentChat} />
            </ChatMain>
            <MessageInput chatId={selected} open={open} />
        </ChatBackgroundContainer>
    );
};

export default Chats;

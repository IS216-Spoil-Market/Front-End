import { useAuth0 } from "@auth0/auth0-react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Divider, IconButton, List } from "@mui/material";
import React, { Dispatch, SetStateAction, useMemo } from "react";
import { ChatItem } from "../../../types/chat";
import ChatListItem from "../ChatListItem";
import ChatDrawerHeader from "./ChatDrawerHeader";

interface ChatDrawerContentsProps {
    chats?: ChatItem[];
    setOpen: (value: SetStateAction<boolean>) => void;
    isAboveMedium: boolean;
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
}

const ChatDrawerContents: React.FC<ChatDrawerContentsProps> = ({
    chats,
    setOpen,
    isAboveMedium,
    selected,
    setSelected,
}) => {
    const { user } = useAuth0();

    return (
        <>
            {!isAboveMedium && (
                <ChatDrawerHeader>
                    <IconButton
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </ChatDrawerHeader>
            )}
            <Divider />
            <List>
                {chats?.map(({ users, latestMessage, id }) => {
                    const receiver = useMemo(() => {
                        return users[0].email === user?.email
                            ? users[1]
                            : users[0];
                    }, [users]);

                    return (
                        <ChatListItem
                            key={id}
                            selected={selected === id}
                            name={receiver.name}
                            img={receiver.picture}
                            latestMessage={`${latestMessage.sender.name}: ${latestMessage.content}`}
                            onClick={() => setSelected(id)}
                        />
                    );
                })}
            </List>
        </>
    );
};

export default ChatDrawerContents;

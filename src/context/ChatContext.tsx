import { useAuth0 } from "@auth0/auth0-react";
import { useMediaQuery, useTheme } from "@mui/material";
import {
    createContext,
    ReactNode,
    SetStateAction,
    useEffect,
    useMemo,
    useState,
} from "react";
import useChats from "../custom-hooks/react-query/chat/useChats";
import useScroll from "../custom-hooks/window/useScroll";
import { ChatItem } from "../types/chat";

export const ChatContext = createContext({
    open: false,
    setOpen: (_: SetStateAction<boolean>) => {},
    selected: "",
    setSelected: (_: SetStateAction<string>) => {},
    chats: [] as ChatItem[] | undefined,
    offsetY: 0,
    receiver: undefined as { id: string; name?: string } | undefined,
    isAboveMedium: true,
    currentChat: undefined as ChatItem | undefined,
});

interface ChatContextProps {
    children: ReactNode;
}
export const ChatContextProvider: React.FC<ChatContextProps> = ({
    children,
}) => {
    const theme = useTheme();
    const isAboveMedium = useMediaQuery(theme.breakpoints.up("md"));
    const offsetY = useScroll();

    // Data fetching
    const { user } = useAuth0();
    const { data: chats } = useChats();

    // For handling states
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        isAboveMedium ? setOpen(true) : setOpen(false);
    }, [isAboveMedium]);

    // For keeping track of currently active chat
    useEffect(() => {
        if (chats && chats.length > 0) setSelected(chats[0].id);
    }, [chats]);

    // Compute and find current receiver and sender
    const [currentChat, receiver] = useMemo(() => {
        const currentChat = chats?.find((chat) => chat.id === selected);
        const receiver = currentChat?.users.find(
            (chatUser) => chatUser.email === user?.email
        );
        return [
            currentChat,
            { id: receiver?.id ?? "", name: receiver?.name ?? "Default" },
        ];
    }, [chats, user]);

    return (
        <ChatContext.Provider
            value={{
                open,
                setOpen,
                chats,
                offsetY,
                receiver,
                isAboveMedium,
                currentChat,
                selected,
                setSelected,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

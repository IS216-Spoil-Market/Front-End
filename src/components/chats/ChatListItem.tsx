import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MouseEventHandler } from "react";

interface ChatListItemProp {
    name: string;
    latestMessage: string;
    onClick: MouseEventHandler;
    selected: boolean;
    img: string;
}


const ChatListItem: React.FC<ChatListItemProp> = ({
    name,
    latestMessage,
    onClick,
    selected,
    img,
}) => {
    return (
        <ListItem
            sx={{ bgcolor: selected ? grey[100] : "none" }}
            disablePadding
        >
            <ListItemButton onClick={onClick}>
                <img
                    src={img}
                    style={{
                        marginRight: 16,
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                    }}
                />
                <ListItemText
                    primary={name}
                    secondary={latestMessage}
                    primaryTypographyProps={{ noWrap: true }}
                    secondaryTypographyProps={{ noWrap: true }}
                />
            </ListItemButton>
        </ListItem>
    );
};

export default ChatListItem;

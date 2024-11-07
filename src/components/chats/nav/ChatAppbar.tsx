import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../../constants/chatAppBar";

interface ChatAppbarComponentProps extends MuiAppBarProps {
    open?: boolean;
}

const ChatAppbarComponent = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<ChatAppbarComponentProps>(({ theme }) => ({
    flexGrow: 1,
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(["margin", "width"], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

export default ChatAppbarComponent;

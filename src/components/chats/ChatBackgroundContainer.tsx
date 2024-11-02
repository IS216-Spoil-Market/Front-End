import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import HeroBanner from "../../assets/images/home/hero-banner.jpg";

interface ChatBackgroundContainerProps {
    children: ReactNode;
}

const ChatBackgroundContainer: React.FC<ChatBackgroundContainerProps> = ({
    children,
}) => {
    return (
        <Box sx={{ height: `calc(100vh - 76px)` }}>
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
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default ChatBackgroundContainer;

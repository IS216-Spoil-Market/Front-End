import { Box } from "@mui/material";
import React, { ReactNode } from "react";
// import HeroBanner from "../../assets/images/home/hero-banner.jpg";

interface ChatBackgroundContainerProps {
    children: ReactNode;
}

const ChatBackgroundContainer: React.FC<ChatBackgroundContainerProps> = ({
    children,
}) => {
    return (
        <Box sx={{ height: `calc(100vh - 76px)`,  }}>
            <Box
                height="100vh"
                sx={{background: "linear-gradient(to right, #9b5de5, #f15bb5)"}}
            >
                <Box
                    height="100vh"
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default ChatBackgroundContainer;

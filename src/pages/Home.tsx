import { Box, Typography } from "@mui/material";
import React from "react";
import AppBar from "../components/common/nav/AppBar";
import Heading3 from "../components/common/heading/Heading3";
import Heading4 from "../components/common/heading/Heading4";

const Home: React.FC = () => {
    return (
        <>
            <Box sx={{ height: 200, background: "purple" }}>
                <AppBar invisBg />
            </Box>
            <Heading3>Heading 3</Heading3>
            <Heading4>Heading 4</Heading4>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="body1">Body 1</Typography>
            <Typography variant="body2">Body 2</Typography>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>
            <Typography variant="caption">Caption</Typography>
            <Typography variant="overline">Overline</Typography>
        </>
    );
};

export default Home;

import { Grid, Typography } from "@mui/material";
import React from "react";
import Dots from "../../../assets/images/dots.png";

interface Heading4Props {
    children: string;
}

const Heading4: React.FC<Heading4Props> = ({ children }) => {
    return (
        <Grid container display="flex" gap={2} alignItems="center">
            <Grid
                item
                sx={{
                    height: { xs: 25, md: 35, lg: 45 },
                    width: { xs: 25, md: 35, lg: 45 },
                }}
            >
                <img src={Dots} height="100%" width="100%" />
            </Grid>
            <Typography variant="h4" textOverflow="ellipsis">
                {children}
            </Typography>
        </Grid>
    );
};

export default Heading4;

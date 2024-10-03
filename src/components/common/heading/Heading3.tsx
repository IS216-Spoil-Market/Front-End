import { Grid, Typography } from "@mui/material";
import React from "react";
import Dots from "../../../assets/images/dots.png";

interface Heading3Props {
    children: string;
}

const Heading3: React.FC<Heading3Props> = ({ children }) => {
    return (
        <Grid container display="flex" gap={2} alignItems="center">
            <Grid
                item
                sx={{
                    height: { xs: 30, md: 40, lg: 50 },
                    width: { xs: 30, md: 40, lg: 50 },
                }}
            >
                <img src={Dots} height="100%" width="100%" />
            </Grid>
            <Typography variant="h3" fontWeight="600" textOverflow="ellipsis">
                {children}
            </Typography>
        </Grid>
    );
};

export default Heading3;

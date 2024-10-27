import { Grid } from "@mui/material";
import React from "react";
import Placeholder from "../../../assets/images/user/hero-banner.jpg";
import TextField from "../../common/form/TextField";

interface ProfileMainSectionProps {
    image?: string | null;
}

const ProfileMainSection: React.FC<ProfileMainSectionProps> = ({ image }) => {
    return (
        <Grid
            container
            direction="row"
            columnGap={6}
            rowGap={4}
            my={8}
            alignItems="center"
        >
            <Grid item xs={12} sm={6} md={4} px={2}>
                <img
                    src={image ?? Placeholder}
                    style={{
                        borderRadius: "500px",
                        width: "100%",
                        aspectRatio: "1",
                        objectFit: "cover",
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={6} px={2}>
                <Grid
                    container
                    maxWidth={504}
                    rowSpacing={4}
                    direction="column"
                >
                    <Grid item width="100%">
                        <Grid container direction="row" columnGap={8}>
                            <Grid item sm={12} md={5}>
                                <TextField
                                    variant="standard"
                                    label="Name"
                                    name="name"
                                />
                            </Grid>
                            <Grid item sm={12} md={5}>
                                <TextField
                                    variant="standard"
                                    label="Email Address"
                                    name="email"
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item width="100%">
                        <TextField
                            multiline
                            fullWidth
                            variant="standard"
                            name="about"
                            label="About Me"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProfileMainSection;

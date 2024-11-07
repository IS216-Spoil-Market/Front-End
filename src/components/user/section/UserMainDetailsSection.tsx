import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { UserDetails } from "../../../types/userDetails";

interface UserMainDetailsSectionProps {
    user: UserDetails;
}

const UserMainDetailsSection: React.FC<UserMainDetailsSectionProps> = ({
    user,
}) => {
    const averageRating = useMemo(
        () =>
            user?.reviews?.reduce((prev, curr) => (prev += curr?.rating), 0) /
            user?.reviews?.length,
        [user?.reviews]
    );

    return (
        <Grid item xs={12} md={2} textAlign="center">
            <img
                referrerPolicy="no-referrer"
                src={user?.picture}
                alt="User Profile"
                style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                }}
            />
            <Typography variant="h4" fontWeight="600">
                {user?.name}
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={1}
                mb={2}
            >
                <Rating value={averageRating} precision={0.5} readOnly />
                <Typography variant="body1" sx={{ ml: 1 }}>
                    {averageRating}
                </Typography>
            </Box>
            <Button variant="contained" size="large" color="primary">
                Barter Now
            </Button>
        </Grid>
    );
};

export default UserMainDetailsSection;

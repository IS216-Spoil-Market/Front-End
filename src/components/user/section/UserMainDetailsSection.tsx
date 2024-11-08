import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { UserDetails } from "../../../types/userDetails";
import { useMutation } from "@tanstack/react-query";
import { createOrGetChat } from "../../../axios/chat";
import { useNavigate, useParams } from "react-router-dom";
import PlaceholderImage from "../../../assets/images/user-placeholder.png";

interface UserMainDetailsSectionProps {
    user: UserDetails;
}

const UserMainDetailsSection: React.FC<UserMainDetailsSectionProps> = ({
    user,
}) => {
    const averageRating = useMemo(
        () =>
            Math.round(
                (user?.reviews?.reduce(
                    (prev, curr) => (prev += curr?.rating),
                    0
                ) /
                    user?.reviews?.length) *
                    100
            ) / 100,
        [user?.reviews]
    );
    const { id } = useParams();

    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: (id?: string) => createOrGetChat(id ?? ""),
        onSuccess: ({ id }) => navigate("/chat", { state: { id } }),
    });

    return (
        <Grid item xs={12} md={2} textAlign="center">
            <img
                referrerPolicy="no-referrer"
                src={user?.picture ?? PlaceholderImage}
                alt="User Profile"
                style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                }}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = PlaceholderImage;
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
                <Rating value={averageRating} precision={0.25} readOnly />
                <Typography variant="body1" sx={{ ml: 1 }}>
                    {averageRating.toFixed(2)}
                </Typography>
            </Box>
            <Button
                onClick={() => mutate(id)}
                variant="contained"
                size="large"
                color="primary"
            >
                Barter Now
            </Button>
        </Grid>
    );
};

export default UserMainDetailsSection;

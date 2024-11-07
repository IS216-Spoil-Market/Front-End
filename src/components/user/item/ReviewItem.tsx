import { Box, Grid, Rating, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { ReviewItem as ReviewItemI } from "../../../types/userDetails";

interface ReviewItemProps {
    review?: ReviewItemI;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
    return (
        <Grid item xs={12} key={review?._id}>
            <Box p={2}>
                <Grid item xs={2} md={2} textAlign="center">
                    <img
                        src={review?.reviewer_id?.picture}
                        alt="User Profile"
                        style={{
                            borderRadius: "50%",
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                        }}
                    />
                    <Typography variant="h6">
                        {review?.reviewer_id?.name}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Rating
                            value={review?.rating}
                            precision={0.5}
                            readOnly
                        />
                        <Typography
                            variant="caption"
                            color="textSecondary"
                            ml={5}
                        >
                            {dayjs(review?.createdAt).format("DD/MM/YYYY")}
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {review?.review_of_user}
                    </Typography>
                </Grid>
            </Box>
        </Grid>
    );
};

export default ReviewItem;

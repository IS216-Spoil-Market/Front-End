import React, { useState } from "react";
import { Container, Box, Typography, Button, Divider, Card, CardContent, Grid, TextField, Avatar, Rating, Chip } from "@mui/material";
import Placeholder from "../../assets/images/user/hero-banner.jpg";
import Heading3 from "../../components/common/heading/Heading3";
import { reviewSchema } from "../../zod-schema/reviewSchema";
import dayjs from "dayjs";

interface Review {
    reviewContent: string;
    rating: number;
    date: string;
}

const UserDetails: React.FC = () => {
    const [reviewContent, setReviewContent] = useState("");
    const [rating, setRating] = useState<number | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [error, setError] = useState<string | null>(null);

    const postReview = () => {
        const reviewData = {
            review: reviewContent,
            rating: rating || 0,
            date: dayjs().format("DD/MM/YYYY HH:mm"),
        };

        const validation = reviewSchema.safeParse(reviewData);

        if (!validation.success) {
            setError(validation.error.errors[0].message);
        } else {
            const newReview: Review = {
                reviewContent: validation.data.review,
                rating: validation.data.rating,
                date: validation.data.date,
            };

            setReviews([...reviews, newReview]);
            setReviewContent("");
            setRating(null);
            setError(null);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            <Box
                justifyContent={{ xs: "center", s: "center", md: "flex-start" }}
                mb={{ xs: 5, md: 4 }}
            >
                <Grid container spacing={4}>
                    {/* LHS PFP, name, rating */}
                    <Grid item xs={12} md={2} textAlign="center">
                        <img
                            src={Placeholder}
                            alt="User Profile"
                            style={{
                                borderRadius: "50%",
                                width: "150px",
                                height: "150px",
                                objectFit: "cover",
                            }}
                        />
                        <Typography variant="h4" fontWeight="600">John Doe</Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" mt={1} mb={2}>
                            <Rating value={2.5} precision={0.5} readOnly />
                            <Typography variant="body1" sx={{ ml: 1 }}>2.5</Typography>
                        </Box>
                        <Button variant="contained" size="large" color="primary">
                            Barter Now
                        </Button>
                    </Grid>

                    {/* RHS mentoring & looking for */}
                    <Grid item xs={12} md={10}>
                        <Box>
                            <Heading3>Mentoring for</Heading3>
                            <Grid container spacing={1}>
                                {["Social Media Marketing", "Social Media Marketing", "Web Design", "Web Design", "Computer Graphics", "Computer Graphics"].map((label, index) => (
                                    <Grid item key={index}>
                                        <Chip label={label} color="primary" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        <Box mt={4}>
                            <Heading3>Looking for</Heading3>
                            <Grid container spacing={1}>
                                {["Social Media Marketing", "Social Media Marketing", "Web Design", "Web Design", "Computer Graphics", "Computer Graphics"].map((label, index) => (
                                    <Grid item key={index}>
                                        <Chip label={label} color="secondary" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Divider />

            {/* Reviews */}
            <Box mt={4}>
                <Heading3>Reviews</Heading3>
                <Grid item width="100%" sm={12} md={12}>
                    <Card>
                        <CardContent>
                            <Grid>
                                <Typography variant="h6">Leave a Review</Typography>
                                <Divider />

                                <Grid container direction="row">
                                    {/* profile pic */}
                                    <Grid xs={2} margin={2} item>
                                        <Avatar
                                            sx={{
                                                bgcolor: 'grey',
                                                width: 80,
                                                height: 80
                                            }}
                                        >OP</Avatar>
                                    </Grid>

                                    {/* right top section */}
                                    <Grid xs={9} item>
                                        <Grid item container direction="row" sm={12} md={12} mt={2}>
                                            <Typography variant="body1">Your Rating</Typography>
                                            <Rating
                                                precision={0.5}
                                                value={rating}
                                                onChange={(event, newValue) => setRating(newValue)}
                                            />
                                        </Grid>
                                        <Grid>
                                            <TextField
                                                fullWidth
                                                variant="standard"
                                                label="Your Review"
                                                name="review"
                                                value={reviewContent}
                                                error={!!error}
                                                helperText={error}
                                                onChange={(event) => setReviewContent(event.target.value)}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="secondary"
                                            sx={{ ml: "auto", display: "block" }}
                                            onClick={postReview}
                                        >
                                            Post Review
                                        </Button>
                                    </Grid>

                                    {/* User's scrollable reviews */}
                                    <Grid xs={12} item>
                                        {reviews.map((review, index) => (
                                            <Box key={index} mt={2}>
                                                <Rating value={review.rating} precision={0.5} readOnly />
                                                <Typography variant="caption" color="textSecondary">
                                                    {review.date}
                                                </Typography>
                                                <Typography variant="body1">
                                                    {review.reviewContent}
                                                </Typography>
                                                <Divider sx={{ mt: 2 }} />
                                            </Box>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>
        </Container>
    );
};

export default UserDetails;

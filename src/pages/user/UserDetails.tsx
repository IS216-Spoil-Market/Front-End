import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Box, Typography, Button, Divider, Card, CardContent, Grid, TextField, Avatar, Rating, Chip } from "@mui/material";
import Heading3 from "../../components/common/heading/Heading3";
import { reviewSchema, ReviewFormI } from "../../zod-schema/reviewSchema";
import dayjs from "dayjs";
import usePostReview from "../../custom-hooks/react-query/review/usePostReview"
import useGetUserById from "../../custom-hooks/react-query/review/useGetUserById";

interface Review {
    reviewer_id: string;
    reviewee_id: string,
    rating: number;
    review_of_user: string;
    date: string;
}

const UserDetails: React.FC = () => {
    // GET user by id req
    const { id: userId } = useParams();
    const { user } = useAuth0();
    const { mutate } = usePostReview();
    const { data } = useGetUserById(userId);
    console.log(data)

    const selectedName = user?.name?.toLowerCase();
    const userInitial = selectedName ? selectedName[0].toUpperCase() : 'OP';

    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<ReviewFormI>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            review: "",
            rating: 0,
            date: dayjs().format('DD/MM/YYYY')
        }
    });

    const watchRating = watch("rating");

    const handleRatingChange = (newValue: number | null) => {
        setValue("rating", newValue || 0);
    };

    // submit review
    const onSubmit = (data: ReviewFormI) => {
        if (selectedName && userId) {
            const newReview: Review = {
                reviewee_id: userId.toString(),
                reviewer_id: "67233987e6314a96ff1cf28c",
                rating: data.rating,
                review_of_user: data.review,
                date: dayjs().format('DD/MM/YYYY')
            };

            // POST Req
            mutate(newReview);

            // Reset form
            reset();
        }
    };

    return (
        !data ? <Typography variant="h6">User not found</Typography> :
            <Container maxWidth="lg" sx={{ my: 4 }}>
                {/* Previous code remains the same until the review form */}
                <Box mb={4}>
                    {/* LHS PFP, name, rating */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={2} textAlign="center">
                            <img
                                src={data.picture}
                                alt="User Profile"
                                style={{
                                    borderRadius: "50%",
                                    width: "150px",
                                    height: "150px",
                                    objectFit: "cover",
                                }}
                            />
                            <Typography variant="h4" fontWeight="600">{data?.name}</Typography>
                            <Box display="flex" justifyContent="center" alignItems="center" mt={1} mb={2}>
                                <Rating value={data?.reviews?.reduce((prev, current) => prev?.rating + current?.rating) ?? 0} precision={0.5} readOnly />
                                <Typography variant="body1" sx={{ ml: 1 }}>{data?.rating ?? 0}</Typography>
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
                                    <Grid item>
                                        {data?.my_skills.map((skill) => (
                                            <Chip label={skill} key={skill} color="primary" />
                                        ))}
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box mt={4}>
                                <Heading3>Looking for</Heading3>
                                <Grid container spacing={1}>
                                    {data.skills_interested.map((skill, index) => (
                                        <Grid item key={`lookingFor-${index}`}>
                                            <Chip label={skill} color="secondary" />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Reviews Section */}
                <Box mt={4}>
                    <Heading3>Reviews</Heading3>

                    <Grid item width="100%" sm={12} md={12}>
                        <Card>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Grid>
                                        <Typography variant="h6">Leave a Review</Typography>
                                        <Divider />
                                    </Grid>
                                    <Grid container direction="row">
                                        <Grid xs={2} margin={2} item>
                                            <Avatar
                                                sx={{
                                                    bgcolor: 'grey',
                                                    width: 80,
                                                    height: 80
                                                }}
                                            >{userInitial}
                                            </Avatar>
                                        </Grid>

                                        <Grid xs={9} item>
                                            <Grid item container direction="row" sm={12} md={12} mt={2}>
                                                <Typography variant="body1" pr={4}>Your Rating</Typography>
                                                <Rating
                                                    value={watchRating}
                                                    onChange={(_, newValue) => handleRatingChange(newValue)}
                                                    precision={0.5}
                                                />
                                                {errors.rating && (
                                                    <Typography color="error" variant="caption" sx={{ ml: 2 }}>
                                                        {errors.rating.message}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid>
                                                <TextField
                                                    fullWidth
                                                    variant="standard"
                                                    label="Your Review"
                                                    {...register("review")}
                                                    error={!!errors.review}
                                                    helperText={errors.review?.message}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="secondary"
                                            sx={{ ml: "auto", display: "block" }}
                                            type="submit"
                                        >
                                            Post Review
                                        </Button>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Display reviews */}
                        <Grid container spacing={2} item>
                            {data?.reviews?.length > 0 ? (
                                data.reviews.map((review, index) => (
                                    <Grid item xs={12} key={`review-${index}`}>
                                        <Box p={2}>
                                            <Grid item xs={2} md={2} textAlign="center">
                                                <img
                                                    src={data.picture}
                                                    alt="User Profile"
                                                    style={{
                                                        borderRadius: "50%",
                                                        width: "70px",
                                                        height: "70px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <Typography variant="h6">{review.reviewer_id.name}</Typography>
                                                <Box display="flex" alignItems="center">
                                                    <Rating value={review.rating} precision={0.5} readOnly />
                                                    <Typography variant="caption" color="textSecondary" ml={5}>
                                                        {new Date(review.createdAt).toLocaleDateString()}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" sx={{ mt: 1 }}>
                                                    {review.review_of_user}
                                                </Typography>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                ))
                            ) : (
                                <Grid item xs={12}>
                                    <Typography variant="body1" color="textSecondary">
                                        No reviews available for this user.
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>

                    </Grid>
                </Box>
            </Container>
    );
};

export default UserDetails;

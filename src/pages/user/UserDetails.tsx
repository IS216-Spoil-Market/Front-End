import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Box, Typography, Button, Divider, Card, CardContent, Grid, TextField, Avatar, Rating, Chip } from "@mui/material";
import Placeholder from "../../assets/images/user/hero-banner.jpg";
import Heading3 from "../../components/common/heading/Heading3";
import { reviewSchema, ReviewFormI } from "../../zod-schema/reviewSchema";
import dayjs from "dayjs";

const userReviews: UserReview[] = [
    {
        name: "John Doe",
        skill: "Mobile App Development",
        skillWanted: ["Frontend Development", "JavaScript", "React Native", "Problem Solving"],
        text: "A Frontend developer who has been looking for jobs for ages but still cannot land a single job because the OA involved dp for all jobs I wanted for some reasons.",
        rating: 3.5,
        image: "/path/to/image.jpg",
        reviewsOf: [
            {
                reviewer: "Jane Smith",
                text: "John has impressive skills but might need to work on interview techniques.",
                rating: 4,
                date: '13/09/2024'
            },
            {
                reviewer: "Tan Lee Xin",
                text: "John is dedicated but could improve time management.",
                rating: 3,
                date: '13/09/2024'
            }
        ]
    },
    {
        name: "Jane Smith",
        skill: "Web Development",
        skillWanted: ["HTML", "CSS", "JavaScript", "Responsive Design", "React"],
        text: "A passionate web developer always looking for opportunities to learn and grow.",
        rating: 4,
        image: "/path/to/image2.jpg",
        reviewsOf: [
            {
                reviewer: "John Doe",
                text: "Jane has been great to work with and is always open to feedback.",
                rating: 4.5,
                date: '13/09/2024'
            }
        ]
    },
    {
        name: "Tan Lee Xin",
        skill: "Web Development",
        skillWanted: ["JavaScript", "Node.js", "Express", "Project Collaboration"],
        text: "WOW A passionate xiao ding dong always looking for opportunities to disturb people and hehehaha.",
        rating: 4,
        image: "/path/to/image3.jpg",
        reviewsOf: []
    },
    {
        name: "Ding Dong Ling Long",
        skill: "UIUX",
        skillWanted: ["UI Design", "UX Research", "Prototyping", "Figma"],
        text: "WOW A passionate xiao ding dong always looking for opportunities to disturb people and hehehaha.",
        rating: 5,
        image: "/path/to/image4.jpg",
        reviewsOf: []
    },
];

const selectedName = "John Doe";

interface Review {
    reviewer: string;
    text: string;
    rating: number;
    date: string;
}

interface UserReview {
    name: string;
    skill: string;
    skillWanted: string[];
    text: string;
    rating: number;
    image: string;
    reviewsOf: Review[];
}

const UserDetails: React.FC = () => {
    const [userData, setUserData] = useState<UserReview | undefined>(
        userReviews.find(user => user.name === selectedName)
    );

    const { register, handleSubmit, watch, setValue, reset, formState: { errors }} = useForm<ReviewFormI>({
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
        if (userData) {
            const newReview: Review = {
                reviewer: "Current User", // Replace with actual logged-in user name
                text: data.review,
                rating: data.rating,
                date: data.date
            };

            // Update user data with new review
            setUserData({
                ...userData,
                reviewsOf: [...userData.reviewsOf, newReview]
            });

            // Reset form
            reset();
        }
    };

    if (!userData) {
        return <Typography variant="h6">User not found</Typography>;
    }

    return (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            {/* Previous code remains the same until the review form */}
            <Box mb={4}>
                {/* LHS PFP, name, rating */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={2} textAlign="center">
                        <img
                            src={Placeholder || userData.image}
                            alt="User Profile"
                            style={{
                                borderRadius: "50%",
                                width: "150px",
                                height: "150px",
                                objectFit: "cover",
                            }}
                        />
                        <Typography variant="h4" fontWeight="600">{userData.name}</Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" mt={1} mb={2}>
                            <Rating value={userData.rating} precision={0.5} readOnly />
                            <Typography variant="body1" sx={{ ml: 1 }}>{userData.rating}</Typography>
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
                                    <Chip label={userData.skill} color="primary" />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box mt={4}>
                            <Heading3>Looking for</Heading3>
                            <Grid container spacing={1}>
                                {userData.skillWanted.map((skill, index) => (
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
                                        >user
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
                        {userData.reviewsOf.length > 0 ? (
                            userData.reviewsOf.map((review, index) => (
                                <Grid item xs={12} key={`review-${index}`}>
                                    <Box p={2}>
                                        <Typography variant="h6">{review.reviewer}</Typography>
                                        <Box display="flex" alignItems="center">
                                            <Rating value={review.rating} precision={0.5} readOnly />
                                            <Typography variant="caption" color="textSecondary" ml={5}>
                                                {review.date}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" sx={{ mt: 1 }}>
                                            {review.text}
                                        </Typography>
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

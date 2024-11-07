import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Heading3 from "../../components/common/heading/Heading3";
import ReviewItem from "../../components/user/item/ReviewItem";
import LeaveReviewSection from "../../components/user/section/LeaveReviewSection";
import UserMainDetailsSection from "../../components/user/section/UserMainDetailsSection";
import useGetUserById from "../../custom-hooks/react-query/review/useGetUserById";

const UserDetails: React.FC = () => {
    // GET user by id req
    const { id: userId } = useParams();
    const { data } = useGetUserById(userId);

    return !data ? (
        <Typography variant="h6">User not found</Typography>
    ) : (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            {/* Previous code remains the same until the review form */}
            <Box mb={4}>
                {/* LHS PFP, name, rating */}
                <Grid container spacing={4}>
                    <UserMainDetailsSection user={data} />

                    {/* RHS mentoring & looking for */}
                    <Grid item xs={12} md={10}>
                        <Box>
                            <Heading3>Mentoring for</Heading3>
                            <Grid container spacing={1}>
                                <Grid item>
                                    {data?.my_skills.map((skill) => (
                                        <Chip
                                            label={skill}
                                            key={skill}
                                            color="primary"
                                        />
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
                    <LeaveReviewSection />

                    {/* Display reviews */}
                    <Grid container spacing={2} item>
                        {data?.reviews?.length > 0 ? (
                            data.reviews.map((review) => (
                                <ReviewItem review={review} />
                            ))
                        ) : (
                            <Grid item xs={12}>
                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                >
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

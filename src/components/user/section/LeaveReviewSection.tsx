import { useAuth0 } from "@auth0/auth0-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import usePostReview from "../../../custom-hooks/react-query/review/usePostReview";
import { ReviewFormI, reviewSchema } from "../../../zod-schema/reviewSchema";
import Rating from "../../common/form/Rating";
import TextField from "../../common/form/TextField";

interface LeaveReviewSectionProps {}

const LeaveReviewSection: React.FC<LeaveReviewSectionProps> = ({}) => {
    const { user } = useAuth0();
    const formState = useForm<ReviewFormI>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            review_of_user: "",
            rating: 0,
        },
    });
    const { handleSubmit, reset } = formState;
    const { mutate } = usePostReview();
    const { id: userId } = useParams();

    return (
        <FormProvider {...formState}>
            <Card>
                <CardContent>
                    <Grid>
                        <Typography variant="h6">Leave a Review</Typography>
                        <Divider />
                    </Grid>
                    <Grid container direction="row">
                        <Grid xs={2} margin={2} item>
                            {user?.picture ? (
                                <img src={user?.picture} style={{borderRadius: 100}} referrerPolicy="no-referrer"/>
                            ) : (
                                <Avatar
                                    sx={{
                                        bgcolor: "grey",
                                        width: 80,
                                        height: 80,
                                    }}
                                >
                                    {user?.name?.toUpperCase() ?? "S"}
                                </Avatar>
                            )}
                        </Grid>

                        <Grid xs={9} item>
                            <Grid
                                item
                                container
                                direction="row"
                                sm={12}
                                md={12}
                                mt={2}
                            >
                                <Typography variant="body1" pr={4}>
                                    Your Rating
                                </Typography>
                                <Rating name="rating" />
                            </Grid>
                            <Grid>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Your Review"
                                    name="review_of_user"
                                    multiline
                                    inputProps={{
                                        sx: {
                                            overflow: 'auto'
                                        }
                                    }}
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
                            onClick={handleSubmit(
                                ({ rating, review_of_user }: ReviewFormI) => {
                                    // POST Req
                                    mutate({
                                        reviewee_id: userId ?? "",
                                        reviewer_id: user?.email ?? "",
                                        rating,
                                        review_of_user,
                                    });

                                    // Reset form
                                    reset();
                                }
                            )}
                        >
                            Post Review
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </FormProvider>
    );
};

export default LeaveReviewSection;

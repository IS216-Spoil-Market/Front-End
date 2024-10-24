import React, { useState } from "react";
import { Container, Box, TextField, Typography, Card, Grid, CardContent, Chip, Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import StarRating from '../../components/star';
import heroBanner from '../../assets/images/user/hero-banner.jpg';
import AppBar from "../../components/common/nav/AppBar";

interface UserListingProps { }

const reviews = [
    {
        name: "John Doe",
        skill: "Mobile App Development",
        text: "A Frontend developer who has been looking for jobs for ages but still cannot land a single job because the OA involved dp for all jobs I wanted for some reasons.",
        rating: 3.5,
        image: "/path/to/image.jpg",
    },
    {
        name: "Jane Smith",
        skill: "Web Development",
        text: "A passionate web developer always looking for opportunities to learn and grow.",
        rating: 4,
        image: "/path/to/image2jpg",
    },
    {
        name: "Tan Lee Xin",
        skill: "Web Development",
        text: "WOW A passionate xiao ding dong always looking for opportunities to disturb people and hehehaha.",
        rating: 4,
        image: "/path/to/image2.jpg",
    },
    {
        name: "Ding Dong Ling Long",
        skill: "UIUX",
        text: "WOW A passionate xiao ding dong always looking for opportunities to disturb people and hehehaha.",
        rating: 4,
        image: "/path/to/image2.jpg",
    },
];


const UserListing: React.FC<UserListingProps> = ({ }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredReviews = reviews.filter(review =>
        review.skill.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderReviews = () => {
        if (filteredReviews.length === 0 && searchTerm) {
            return (
                <Typography variant="body1" sx={{ textAlign: 'center', color: 'gray' }}>
                    No reviews found for "{searchTerm}".
                </Typography>
            );
        } else if (filteredReviews.length > 0 && searchTerm) {
            return (
                <Grid container spacing={4} >
                    {
                        filteredReviews.map((review, index) => (
                            <Grid item xs={12} sm={12} lg={6} >
                                <Link to="/user/:id" style={{ textDecoration: 'none' }}>
                                    <Card key={index} sx={{ mb: 2 }}>
                                        <CardContent>
                                            <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'flex-start' }, }}>

                                                <Box sx={{
                                                    mr: { sm: 2 },
                                                    mb: { xs: 2, sm: 0 },
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center'
                                                }}>
                                                    <Avatar src={review.image} alt={review.name} sx={{ width: 100, height: 100 }} />
                                                    <StarRating rating={review.rating} sx={{ pt: { xs: 2, sm: 4 } }} /> {/* Assuming StarRating is aligned under the avatar */}
                                                </Box>

                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: { xs: 'column', sm: 'row' },
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <Typography variant="body1"
                                                            sx={{
                                                                fontSize: '1.5rem',
                                                                color: "#303F9F"
                                                            }}>
                                                            {review.name}
                                                        </Typography>
                                                        <Chip
                                                            label={review.skill}
                                                            sx={{
                                                                borderRadius: 5,
                                                                backgroundColor: '#3D5AFE',
                                                                color: 'white',

                                                            }}
                                                        />
                                                    </Box>
                                                    <Typography variant="body2" sx={{ mt: 1, fontSize: '1rem' }}>
                                                        {review.text}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid >
            )
        }
    };
    return (

        <>
            <Box
                sx={{
                    mb: { xs: 5, sm: 4 },
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundImage: `url(${heroBanner})`,
                    backgroundSize: 'cover',
                 pb:14
                }}
            >
                <AppBar invisBg />

                <Typography variant="h3" sx={{
                    color: 'white',
                    fontSize: {
                        xs: '2.5rem',
                        sm: '2.5rem',
                    },
                    textAlign: 'center', // Center the text
                    whiteSpace: { xs: 'normal', sm: 'nowrap' },
                }}> Grow with Swaply</Typography>

                <Typography variant="subtitle1" sx={{
                    color: 'white',
                    fontSize: '1rem',
                }}>Trade skills grow together effortlessly</Typography>
                <TextField
                    variant="outlined"
                    placeholder="What skills are you learning today?"
                    value={searchTerm} // Set the value to the search term state
                    onChange={(event) => setSearchTerm(event.target.value)}

                    sx={{
                        borderRadius: '25px',
                        width: { xs: '80%', sm: '65%' },
                        mt: { xs: 6, sm: 8 },
                        backgroundColor: '#fff',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '25px',
                        },
                        '& .MuiInputBase-input': {
                            padding: '10px 20px',
                        },


                    }}
                    InputProps={{
                        startAdornment: (
                            <SearchIcon style={{ marginRight: '10px', color: '#aaa' }} />
                        ),
                    }}
                />
            </Box>
            <Container>
                {renderReviews()}
            </Container>

        </>
    );
};

export default UserListing;


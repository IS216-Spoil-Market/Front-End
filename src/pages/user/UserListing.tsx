import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import heroBanner from '../../assets/images/user/hero-banner.jpg';
import AppBar from "../../components/common/nav/AppBar";
import UserListingComponent from '../../components/user/listing/UserListing';

const UserListing: React.FC = ({ }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <Box
                sx={{
                    mb: { xs: 5, sm: 4 },
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundImage: `url(${heroBanner})`,
                    backgroundSize: 'cover',
                    pb: 14
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
                <UserListingComponent searchTerm={searchTerm} />
            </Container>

        </>
    );
};

export default UserListing;


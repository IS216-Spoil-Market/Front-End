import React, { useState, useEffect } from "react";
import { Container, Box, TextField, Typography, Card, Grid, CardContent, Chip, Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import StarRating from '../../components/star';
import heroBanner from '../../assets/images/user/hero-banner.jpg';
import AppBar from "../../components/common/nav/AppBar";
import { getUsersBySkill, getUsers } from "../../axios/profile";
import { User } from "../../types/userBySkill";


const UserListing: React.FC = ({ }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await getUsers();
                setAllUsers(response);
                setUsers(response);
            } catch (error) {
                console.error("Error fetching all users:", error);
                setAllUsers([]);
                setUsers([]);
            }
        };
        fetchAllUsers();
    }, [])

    useEffect(() => {
        const fetchUsers = async () => {
            if (searchTerm) {
                try {
                    const response = await getUsersBySkill(searchTerm); // Fetch users based on search term
                    setUsers(response); // Update the users state with fetched data
                    console.log("Response received:", response);
                } catch (error) {
                    console.error("Error fetching users:", error);
                    setUsers([]); // Reset users on error
                }
            } else {
                setUsers(allUsers);

            }
        };

        fetchUsers(); // Call the fetch function on searchTerm change
    }, [searchTerm, allUsers]); // Depend on searchTerm to re-fetch when it changes


    const renderUsers = () => {
        if (users.length === 0 && searchTerm) {
            return (
                <Typography variant="body1" sx={{ textAlign: 'center', color: 'gray' }}>
                    No reviews found for "{searchTerm}".
                </Typography>
            );
        } else if (users.length > 0) {
            return (
                <Grid container spacing={4} >
                    {
                        users.map(user => (
                            <Grid item xs={12} sm={12} lg={6} key={user.id} >
                                <Link to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
                                    <Card sx={{ mb: 2 }}>
                                        <CardContent>
                                            <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'flex-start' }, }}>

                                                <Box sx={{
                                                    mr: { sm: 2 },
                                                    mb: { xs: 2, sm: 0 },
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center'
                                                }}>
                                                    <Avatar src={user.picture} alt={user.name} sx={{ width: 100, height: 100 }} />
                                                    <StarRating rating={user.averageRating} sx={{ pt: { xs: 2, sm: 4 } }} /> {/* Assuming StarRating is aligned under the avatar */}
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
                                                            {user.name}
                                                        </Typography>
                                                        <Chip
                                                            label={user.selectedSkill}
                                                            sx={{
                                                                borderRadius: 5,
                                                                backgroundColor: '#3D5AFE',
                                                                color: 'white',
                                                                padding: '0 16px',
                                                                alignItems: 'center',
                                                            }}
                                                        />
                                                    </Box>
                                                    <Typography variant="body2" sx={{ mt: 1, fontSize: '1rem' }}>
                                                        {user.about}
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
                {renderUsers()}
            </Container>

        </>
    );
};

export default UserListing;


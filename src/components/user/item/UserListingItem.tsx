import { Avatar, Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material"
import { User } from "../../../types/userBySkill"
import { Link } from "react-router-dom"
import StarRating from "../../star"

interface UserListingItemProps {
    user: User,
}

const UserListingItem: React.FC<UserListingItemProps> = ({ user }) => {
    return <Grid item xs={12} sm={12} lg={6} key={user.id} >
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
}

export default UserListingItem
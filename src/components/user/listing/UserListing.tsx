import { Grid, Typography } from "@mui/material"
import useGetUsers from "../../../custom-hooks/react-query/user/useGetUsers"
import UserListingItem from "../item/UserListingItem"

interface UserListingProps {
    searchTerm: string
}

const UserListing: React.FC<UserListingProps> = ({ searchTerm }) => {
    const {data: users} = useGetUsers(searchTerm)
    
    return (users?.length === 0) ? (<Typography variant="body1" sx={{ textAlign: 'center', color: 'gray' }}>
        No reviews found for "{searchTerm}".
    </Typography>) : (
        <Grid container spacing={4} >
            {
                users?.map(user => <UserListingItem user={user}/>)
            }
        </Grid >
    )
}

export default UserListing
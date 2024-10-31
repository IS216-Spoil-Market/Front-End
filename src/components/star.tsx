import React from 'react';
import { Box } from '@mui/material';
import { SxProps } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

interface StarRatingProps {
    rating: number; // Rating value between 0 and 5
    sx?:SxProps;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, sx }) => {
    const validRating = Math.min(Math.max(rating, 0), 5);
    const stars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1; 

        if (starValue <= validRating) {
            return <StarIcon key={index} style={{ color: '#FFB400' }} />;
        } else if (starValue - 0.5 === validRating) {
            return <StarHalfIcon key={index} style={{ color: '#FFB400' }} />;
        } else {
            return <StarBorderIcon key={index} style={{ color: '#FFB400' }} />;
        }
    });
    return (
        <Box display="flex" alignItems="center" sx={sx}>
            {stars}
        </Box>
    );
};

export default StarRating;
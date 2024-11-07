import { Rating as MUIRating } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface RatingProps {
    name: string;
}

const Rating: React.FC<RatingProps> = ({ name }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={0.0}
            render={({ field }) => (
                <MUIRating
                    precision={0.25}
                    {...field}
                    onChange={(_, newVal) => field.onChange(newVal)}
                />
            )}
        />
    );
};

export default Rating;

import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React from "react";

interface SkillSearchBarProps {
    color: "primary" | "secondary";
    data?: string[];
    isLoading: boolean;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SkillSearchBar: React.FC<SkillSearchBarProps> = ({
    data,
    color,
    isLoading,
    value,
    setValue,
}) => {
    return (
        <Autocomplete
            freeSolo
            value={value}
            inputValue={value}
            onChange={(_, newValue) => setValue(newValue || "")}
            onInputChange={(_, newValue) => setValue(newValue || "")}
            options={data || []}
            loading={isLoading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    color={color}
                    label="Search Skill"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {isLoading && (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                )}
                            </>
                        ),
                    }}
                    fullWidth
                />
            )}
        />
    );
};

export default SkillSearchBar;

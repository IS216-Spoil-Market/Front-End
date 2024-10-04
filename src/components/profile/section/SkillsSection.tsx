import { Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import useSkillsAPI from "../../../custom-hooks/api/useSkillsAPI";
import Heading4 from "../../common/heading/Heading4";
import SkillSearchBar from "../form/SkillSearchBar";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ProfileFormI } from "../../../zod-schema/profileSchema";

interface SkillsSectionProps {
    variant: "skills_interested" | "my_skills";
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ variant }) => {
    const { value, setValue, query } = useSkillsAPI();
    const { control } = useFormContext<ProfileFormI>();
    const { append, remove, fields } = useFieldArray<ProfileFormI>({
        control,
        name: variant,
    });

    return (
        <Grid container direction="column" rowGap={6} mb={6}>
            <Grid item>
                <Heading4>
                    {variant === "my_skills"
                        ? "My Skills"
                        : "Skills Interested"}
                </Heading4>
            </Grid>
            <Grid item>
                <Grid container direction="column" rowGap={3}>
                    <Typography variant="h6">
                        {variant === "my_skills"
                            ? "I can mentor people who are looking for the following skills..."
                            : "I am looking for people with the following skills..."}
                    </Typography>
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            columnSpacing={4}
                            rowGap={1}
                            alignItems="center"
                        >
                            <Grid sm={9} item flexGrow={1}>
                                <SkillSearchBar
                                    {...query}
                                    color={
                                        variant === "my_skills"
                                            ? "secondary"
                                            : "primary"
                                    }
                                    value={value}
                                    setValue={setValue}
                                />
                            </Grid>
                            <Grid sm={3} item>
                                <Button
                                    onClick={() => {
                                        if (value.length > 0) {
                                            append({ value: value });
                                            setValue("");
                                        }
                                    }}
                                    variant="contained"
                                    size="large"
                                    color={
                                        variant === "my_skills"
                                            ? "secondary"
                                            : "primary"
                                    }
                                >
                                    Add Skill
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container gap={1}>
                            {fields.map(({ id, value }, index) => (
                                <Chip
                                    color={
                                        variant === "my_skills"
                                            ? "secondary"
                                            : "primary"
                                    }
                                    key={id}
                                    onDelete={() => remove(index)}
                                    label={value}
                                />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SkillsSection;

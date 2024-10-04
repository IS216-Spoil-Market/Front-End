import { Box, Container, Fab } from "@mui/material";
import React from "react";
import Heading3 from "../components/common/heading/Heading3";
import ProfileMainSection from "../components/profile/section/ProfileMainSection";
import { FormProvider, useForm } from "react-hook-form";
import { SaveRounded } from "@mui/icons-material";
import SkillsSection from "../components/profile/section/SkillsSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "../zod-schema/profileSchema";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
    const formState = useForm({
        resolver: zodResolver(profileSchema),
    });
    const { handleSubmit } = formState;

    return (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            <Heading3>My Profile</Heading3>
            <Box
                width={128}
                height={8}
                sx={{ bgcolor: "secondary.main", my: 2 }}
            />
            <FormProvider {...formState}>
                <ProfileMainSection />
                <SkillsSection variant="skills_interested" />
                <SkillsSection variant="my_skills" />
            </FormProvider>
            <Fab
                variant="extended"
                color="primary"
                sx={{ position: "fixed", bottom: 24, right: 24 }}
                onClick={handleSubmit((data) => console.log(data))}
            >
                Save
                <SaveRounded sx={{ ml: 1 }} />
            </Fab>
        </Container>
    );
};

export default Profile;

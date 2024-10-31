import { useMutation } from "@tanstack/react-query";
import { createOrGetUser } from "../../../axios/profile";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormI } from "../../../zod-schema/profileSchema";
import { useState, useEffect } from "react";

const useProfile = (formState: UseFormReturn<ProfileFormI>) => {
    const { mutate, data: user } = useMutation({
        mutationFn: createOrGetUser,
    });

    const { reset } = formState;
    const [img, setImg] = useState<string | null>(null);

    // Call to retrieve profile first
    useEffect(() => {
        mutate();
    }, []);

    useEffect(() => {
        if (user) {
            const {
                name,
                email,
                about,
                skills_interested,
                my_skills,
                picture,
                id,
            } = user;
            // Update image shown
            setImg(picture);

            // Update form values
            reset({
                id,
                name,
                email,
                about,
                skills_interested: skills_interested.map((skill) => ({
                    value: skill,
                })),
                my_skills: my_skills.map((skill) => ({ value: skill })),
            });
        }
    }, [user]);

    return img;
};

export default useProfile;

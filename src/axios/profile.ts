import { Profile } from "../types/user";
import { ProfileFormI } from "../zod-schema/profileSchema";
import { profileInstance } from "./client";

export const createOrGetUser = async () => {
    const { data } = await profileInstance.post("/");
    return data as Profile;
};

export const updateProfile = async ({
    skills_interested,
    my_skills,
    ...rest
}: ProfileFormI) => {
    const { data } = await profileInstance.put("/", {
        skills_interested: skills_interested.map(({ value }) => value),
        my_skills: my_skills.map(({ value }) => value),
        ...rest,
    });
    return data as Profile;
};

import { Profile } from "../types/user";
import { User } from "../types/userBySkill";
import { ProfileFormI } from "../zod-schema/profileSchema";
import { profileInstance, userInstance } from "./client";

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

export const getUsersBySkill = async (skill: string) => {
    try {
        const encodedSkill = encodeURIComponent(skill);
        const { data } = await userInstance.get(`/${encodedSkill}`);
        return data as User[]; // Assuming the response is an array of profiles
    } catch (error) {
        console.error("Error fetching users by skill:", error);
        throw error; // Optionally rethrow the error or handle it as needed
    }
};

export const getUsers = async () => {
    const { data } = await userInstance.get("");
    return data as User[]; // Assuming the response is an array of profiles
};
import { Profile } from "../types/user";
import { profileInstance } from "./client";

export const createOrGetUser = async () => {
    const { data } = await profileInstance.post("/");
    return data as Profile;
};

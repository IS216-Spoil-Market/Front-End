import axios from "axios";

export const getSkills = async (q: string) => {
    const { data } = await axios.get("https://api.promptapi.com/skills", {
        params: {
            q: q,
        },
        headers: {
            apikey: import.meta.env.VITE_SKILL_API_KEY,
        },
    });
    return data as string[];
};

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getSkills } from "../../axios/skills-api";

const useSkillsAPI = () => {
    const [value, setValue] = useState("");
    const query = useQuery({
        queryKey: ["external-api", "skill", value],
        queryFn: () => getSkills(value),
        enabled: value.length > 0,
    });

    return { value, setValue, query };
};

export default useSkillsAPI;

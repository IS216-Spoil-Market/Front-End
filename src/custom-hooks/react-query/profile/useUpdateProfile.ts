import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../../../axios/profile";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const useUpdateProfile = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: updateProfile,
        onSuccess: () => {
            navigate("/");
            enqueueSnackbar("Update Profile Successful!", {
                variant: "success",
            });
        },
        onError: () => {
            enqueueSnackbar("Failed to update profile, please try again!", {
                variant: "error",
            });
        },
    });
};

export default useUpdateProfile;

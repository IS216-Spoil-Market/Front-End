import { enqueueSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ErrorProps {}

const Error: React.FC<ErrorProps> = ({}) => {
    const navigate = useNavigate();

    useEffect(() => {
        enqueueSnackbar("The page you are accessing it not available", {
            variant: "error",
        });
        navigate("/");
    });

    return <></>;
};

export default Error;

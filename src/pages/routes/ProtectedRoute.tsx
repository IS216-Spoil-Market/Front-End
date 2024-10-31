import { useAuth0 } from "@auth0/auth0-react";
import { enqueueSnackbar } from "notistack";
import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
            enqueueSnackbar(
                "You are not logged in! Please login before accessing this page!",
                { variant: "warning" }
            );
        }
    }, [isAuthenticated]);

    return <>{children}</>;
};

export default ProtectedRoute;

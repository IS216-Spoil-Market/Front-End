import AppBar from "../components/common/nav/AppBar";
import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    return (
        <ProtectedRoute>
            <AppBar />
            <Outlet />
        </ProtectedRoute>
    );
};

export default RootLayout;

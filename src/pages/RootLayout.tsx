import AppBar from "../components/common/nav/AppBar";
import React from "react";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    );
};

export default RootLayout;

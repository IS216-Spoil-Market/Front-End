import AppBar from "../components/common/nav/AppBar";
import React from "react";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    return (
        <>
            <AppBar position="static"/>
            <Outlet />
        </>
    );
};

export default RootLayout;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import UserListing from "../pages/user/UserListing";
import UserDetails from "../pages/user/UserDetails";
import Profile from "../pages/Profile";
import RootLayout from "../pages/RootLayout";

export default createBrowserRouter([
    { path: "/", element: <Home /> },
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/chat", element: <Chats /> },
            { path: "/user/:id", element: <UserDetails /> },
            { path: "/user", element: <UserListing /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
]);

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import UserListing from "../pages/user/UserListing";
import UserDetails from "../pages/user/UserDetails";
import Profile from "../pages/Profile";
import RootLayout from "../pages/RootLayout";
import Error from "../pages/Error";

export default createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error /> },
    { path: "/user", element: <UserListing /> },
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/chat", element: <Chats /> },
            { path: "/user/:id", element: <UserDetails /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
]);

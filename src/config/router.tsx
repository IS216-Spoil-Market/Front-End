import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import UserListing from "../pages/user/UserListing";
import UserDetails from "../pages/user/UserDetails";
import Profile from "../pages/Profile";

export default createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/chat", element: <Chats /> },
    { path: "/user", element: <UserListing /> },
    { path: "/user/:id", element: <UserDetails /> },
    { path: "/profile", element: <Profile /> },
]);

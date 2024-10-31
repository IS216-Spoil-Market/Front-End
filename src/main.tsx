import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import queryClient from "./config/query-client.ts";
import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import router from "./config/router.tsx";
import defaultTheme from "./config/theme.ts";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-cxf4lbu8xjigb53k.us.auth0.com"
            clientId="vQ2LnE1iX6ujx8bRmwQQ1Hm8xGlL0q1r"
            authorizationParams={{
                redirect_uri: import.meta.env.VITE_REDIRECT_ORIGIN,
                audience: import.meta.env.DEV
                    ? import.meta.env.VITE_DEVELOPMENT_SERVER
                    : import.meta.env.VITE_PRODUCTION_SERVER,
            }}
        >
            <ThemeProvider theme={defaultTheme}>
                <QueryClientProvider client={queryClient}>
                    <SnackbarProvider>
                        <CssBaseline />
                        <RouterProvider router={router} />
                    </SnackbarProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </Auth0Provider>
    </React.StrictMode>
);

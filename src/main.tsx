import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import queryClient from "./config/query-client.ts";
import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import router from "./config/router.tsx";
import defaultTheme from "./config/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <QueryClientProvider client={queryClient}>
                <SnackbarProvider>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </SnackbarProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>
);

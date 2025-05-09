import React from "react";
import ReactDOM from "react-dom/client";

import { createRoot } from "react-dom/client";
import App from "./App";

import { RouteTree } from "../router/RouteTree"
import { RouterProvider, createRouter } from '@tanstack/react-router'


import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const routeTree = RouteTree()
const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
});

const theme = createTheme({
    /** Put your mantine theme override here */
});


const queryClient = new QueryClient();

const container = document.getElementById("app");
const root = createRoot(container)
root.render(

    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <RouterProvider router={router} />
            </MantineProvider>
        </QueryClientProvider>
    </React.StrictMode>
);





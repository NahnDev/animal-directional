import React from "react";
import { RouteProps } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/home-page/HomePage"));
const AnimalPage = React.lazy(() => import("../pages/animal-page/AnimalPage"));
const AdminPage = React.lazy(() => import("../pages/admin-page/AdminPage"));
const RouteNotFound = React.lazy(
    () => import("../pages/notfound-page/RouteNotFound")
);

export const mainRoute: RouteProps[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/animals/:id",
        element: <AnimalPage />,
    },
    {
        path: "/admin/*",
        element: <AdminPage></AdminPage>,
    },
    {
        path: "*",
        element: <RouteNotFound></RouteNotFound>,
    },
];

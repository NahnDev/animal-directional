import React from "react";
import { RouteProps, Navigator, Navigate } from "react-router-dom";

const AdminUserScreen = React.lazy(() => import("./AdminUserScreen"));
const AdminAnimalScreen = React.lazy(() => import("./AdminAnimalScreen"));

export const adminRoute: RouteProps[] = [
    {
        path: "/",
        element: <Navigate replace={true} to={"/admin/users"} />,
    },
    {
        path: "/users",
        element: <AdminUserScreen />,
    },
    {
        path: "/animals",
        element: <AdminAnimalScreen />,
    },
];

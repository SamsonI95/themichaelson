import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import { NotFound } from "@/pages/NotFound";

import { AdminLayout } from "../components/admin/AdminLayout";
import { AdminLogin } from "../pages/admin/AdminLogin";
import { AdminRedirect } from "../pages/admin/AdminRedirect";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { AdminProducts } from "../pages/admin/AdminProducts";
import { AdminProductForm } from "../pages/admin/AdminProductForm";
import { AdminInquiries } from "../pages/admin/AdminInquiries";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "collections", element: <Collection /> },
            { path: "contact", element: <Contact /> },
            { path: '*', element: <NotFound />},
        ]
    },
    {
        path: "/admin/login",
        element: <AdminLogin />
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <AdminRedirect /> },
            { path: "dashboard", element: <AdminDashboard /> },
            { path: "products", element: <AdminProducts /> },
            { path: "products/new", element: <AdminProductForm /> },
            { path: "products/edit/:id", element: <AdminProductForm /> },
            { path: "inquiries", element: <AdminInquiries /> }
        ]
    }
]);
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

// Lazy load page components for code splitting
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Collection = lazy(() => import("../pages/Collection"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound").then(module => ({ default: module.NotFound })));

const AdminLayout = lazy(() => import("../components/admin/AdminLayout").then(module => ({ default: module.AdminLayout })));
const AdminLogin = lazy(() => import("../pages/admin/AdminLogin").then(module => ({ default: module.AdminLogin })));
const AdminRedirect = lazy(() => import("../pages/admin/AdminRedirect").then(module => ({ default: module.AdminRedirect })));
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard").then(module => ({ default: module.AdminDashboard })));
const AdminProducts = lazy(() => import("../pages/admin/AdminProducts").then(module => ({ default: module.AdminProducts })));
const AdminProductForm = lazy(() => import("../pages/admin/AdminProductForm").then(module => ({ default: module.AdminProductForm })));
const AdminInquiries = lazy(() => import("../pages/admin/AdminInquiries").then(module => ({ default: module.AdminInquiries })));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--color-navy)"></div>
  </div>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Home />
                    </Suspense>
                )
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: "collections",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Collection />
                    </Suspense>
                )
            },
            {
                path: "contact",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Contact />
                    </Suspense>
                )
            },
            {
                path: '*',
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <NotFound />
                    </Suspense>
                )
            },
        ]
    },
    {
        path: "/admin/login",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <AdminLogin />
            </Suspense>
        )
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <Suspense fallback={<LoadingSpinner />}>
                    <AdminLayout />
                </Suspense>
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AdminRedirect />
                    </Suspense>
                )
            },
            {
                path: "dashboard",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AdminDashboard />
                    </Suspense>
                )
            },
            {
                path: "products",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AdminProducts />
                    </Suspense>
                )
            },
            {
                path: "products/new",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AdminProductForm />
                    </Suspense>
                )
            },
            {
                path: "products/edit/:id",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AdminProductForm />
                    </Suspense>
                )
            },
            {
                path: "inquiries",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AdminInquiries />
                    </Suspense>
                )
            }
        ]
    }
]);
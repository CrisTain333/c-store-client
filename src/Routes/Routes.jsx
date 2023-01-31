import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

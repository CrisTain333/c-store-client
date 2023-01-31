import { createBrowserRouter } from "react-router-dom";
import SingIn from "../Authentication/SingIn";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";

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
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SingIn />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import PrivateRoute from "./Private/PrivateRoute";
import Payment from "../Pages/Payment/Payment";

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
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <ShoppingCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/Payment/success",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

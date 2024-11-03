import Layout from "../Components/Layout";
import Login from "../Pages/Login/Login";
import ResetCode from "../Pages/ResetCode";
import ForgetPassword from "../Pages/ForgetPassword";
import Registration from "../Pages/Registration";
import Cart from "../Pages/Cart";
import Products from "../Components/Products";
import Categories from "../Pages/Categories";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Wishlist from "../Pages/Wishlist";
import ProtectedRoute from "../Components/ProtectedRoute";
import ProtectedAuthRoute from "../Components/ProtectedAuthRoute";

import NotFound from "../Pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import ResetPssword from "../Pages/ResetPassword";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedAuthRoute>
            <Registration />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedAuthRoute>
            <Login />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "forgetpassword",
        element: (
          <ProtectedAuthRoute>
            <ForgetPassword />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "forgetpassword/resetcode",
        element: (
          <ProtectedAuthRoute>
            <ResetCode />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "resetpssword",
        element: (
          <ProtectedAuthRoute>
            <ResetPssword />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "productdetails/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

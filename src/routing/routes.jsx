import Layout from "../Components/Layout";
import Login from "../Components/pages/Login";
import Registration from "../Components/Pages/Registration";
import Cart from "../Components/Pages/Cart";
import Products from "../Components/Products";
import Categories from "../Components/Pages/Categories";
import Home from "../Components/pages/Home";
import ProductDetails from "../Components/Pages/ProductDetails";
import ProtectedRoute from "../Components/ProtectedRoute";
import NotFound from "../Components/Pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

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
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
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

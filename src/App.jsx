import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";

import Login from "./Components/Login";
import Layout from "./Components/Layout";
import Registration from "./Components/Registration";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
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
          element: <Cart />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "productdetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;

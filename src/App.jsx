import "./App.css";
import { Button } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Roots/Root";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import ProductDetailPage from "./pages/ProductDetail";
import Error404Page from "./pages/Roots/Error404";
import ProductsPage from "./pages/Products";
import AuthPage from "./pages/Authentication";
import AuthLayout from "./pages/Roots/AuthRoot";
import NotFoundPage from "./pages/Roots/ProdNotFound404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error404Page />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/shop", element: <ShopPage /> },
        { path: "/products", element: <ProductsPage /> },
        { path: "/products/:productId", element: <ProductDetailPage /> },
      ],
    },
    { path: "/login",
      element: <AuthLayout/>,
      errorElement:<NotFoundPage/>,
      children:[
        {index:true, element:<AuthPage/>},
      ]
  },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

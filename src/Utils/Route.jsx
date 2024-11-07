import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import DisplayProduct from "../Components/DisplayProduct";
import NotFound from "../Components/Notfound";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Page/Blog";
import Home from "../Page/Home";
import ProductDetails from "../Page/ProductDetails";
import Statistics from "../Page/Statistics";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../category.json"),

        children: [
          {
            path: "/",
            element: <DisplayProduct />,
          },
          {
            path: "/category/:catName",
            element: <DisplayProduct />,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/blog",
        loader: () => fetch("../blog.json"),
        element: <Blog />,
      },
    ],
  },
]);

export { routes };

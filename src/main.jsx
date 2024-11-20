import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Product from "./Product.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <h1>Hello</h1>
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/product",
    element: <Product/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

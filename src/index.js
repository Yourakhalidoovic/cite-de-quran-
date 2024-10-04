import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home/Home";

import Sourates from "./Page/Sourates/Sourates";
import Reciteurs from "./Page/Reciteurs/Reciteurs";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reciteurs/",
    element: <Reciteurs />,
  },
  {
    path: "/sourates/:id",
    element: <Sourates />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Upcomming from "./upcomming";
import PopularMovies from "./popular";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "upcoming",
    element: <Upcomming/>
  },
  {
    path: "popular",
    element: <PopularMovies/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import MarketPlace from "./Components/MarketPlace/MarketP";
import SignUp from "./LoginSign/SignUp";
import Sign from "./LoginSign/Sign";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Sign />,
  },
  {
    path: "marketplace",
    element: <MarketPlace />,
    children: [
      { path: "bids" },
      { path: "saved" },
      { path: "collection" },
      { path: "profile" },
      { path: "settings" },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

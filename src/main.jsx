import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import MarketPlace from "./Components/MarketPlace/MarketP";
import SignUp from "./LoginSign/SignUp";
import Sign from "./LoginSign/Sign";
import ErrorPage from "./ErrorPage";
import { lazy } from "@loadable/component";
const Settings = lazy(() =>
  import("./Components/MarketPlace/Main/MainBody5/Settings")
);
const Bid = lazy(() =>
  import("./Components/MarketPlace/Main/MainBody1/Bid")
);


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
    path: "marketPlace",
    element: <MarketPlace />,
    children: [
      { path: "settings", element: <Settings /> },
      {
        path: "bid",
        element: <Bid />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

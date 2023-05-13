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

const Bid = lazy(() => import("./Components/MarketPlace/Main/MainBody1/Bid"));
const Saved = lazy(() =>
  import("./Components/MarketPlace/Main/MainBody2/Saved")
);
const Collection = lazy(() =>
  import("./Components/MarketPlace/Main/MainBody3/Collection")
);
const Profile = lazy(() =>
  import("./Components/MarketPlace/Main/MainBody4/Profile")
);
const Settings = lazy(() =>
  import("./Components/MarketPlace/Main/MainBody5/Settings")
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
      {
        path: "bids",
        element: <Bid />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
      { path: "collection", element: <Collection /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

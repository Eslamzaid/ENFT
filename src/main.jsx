import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import MarketPlace from "./Components/MarketPlace/MarketP";
import SignUp from "./LoginSign/SignUp";
import Sign from "./LoginSign/Sign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp/>
  },
  {
    path: "login",
    element: <Sign/>
  },
  {
    path: "marketPlace",
    element: <MarketPlace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

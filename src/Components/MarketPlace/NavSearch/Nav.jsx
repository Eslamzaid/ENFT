import { useContext, lazy, Suspense } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { DarkLightContext } from "../MarketP";
import LogoEnft from "./../../../assets/Icons/Logo.webp";
import DashBoardCurrent from "./../../../assets/Icons/DashBoard.webp";
import DashBoard from "./../../../assets/Icons/DashBoard.png";
import Bids from "./../../../assets/Icons/bid.webp";
import favorite from "./../../../assets/Icons/heart.webp";
import collection from "./../../../assets/Icons/Collection.webp";
import profile from "./../../../assets/Icons/Profile.webp";
import settings from "./../../../assets/Icons/setting.webp";
const Bid = lazy(() => import("../Main/MainBody1/Bid"));
const Saved = lazy(() => import("../Main/MainBody2/Saved"));
const Collection = lazy(() => import("../Main/MainBody3/Collection"));
const Profile = lazy(() => import("../Main/MainBody4/Profile"));
const Settings = lazy(() => import("../Main/MainBody5/Settings"));

const Nav = () => {
  const darkLight = useContext(DarkLightContext);
  const location = useLocation();
  return (
    <div>
      <h1>Current Pathname {location.pathname}</h1>
      <nav>
        <section>
          <button
            className={`bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md ${
              darkLight.darkMode ? "active" : ""
            }`}
            onClick={() => darkLight.setDarkMode(!darkLight.darkMode)}
          >
            {darkLight.darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </section>
        <section>
          <Link to="/marketplace">
            <img src={LogoEnft} alt=" our Logo" />
          </Link>
          <Link to="/marketplace">
            {location.pathname == "/marketplace" ? (
              <img src={DashBoardCurrent} alt="DashBoard" />
            ) : (
              <img src={DashBoard} alt="DashBoard" />
            )}
          </Link>
          <Link to="bids">
            
            <img src={Bids} alt="Bids" />
          </Link>
          <Link to="saved">
            <img src={favorite} alt="favorite nft's" />
          </Link>
          <Link to="collection">
            <img src={collection} alt="collection" />
          </Link>
          <Link to="profile">
            <img src={profile} alt="profile" />
          </Link>
          <Link to="settings">
            <img src={settings} alt="settings" />
          </Link>
        </section>
      </nav>
      <Routes>
        <Route
          path="settings"
          element={
            <Suspense fallback={"Loading..."}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path="bids"
          element={
            <Suspense fallback={"Loading..."}>
              <Bid />
            </Suspense>
          }
        />
        <Route
          path="saved"
          element={
            <Suspense fallback={"Loading..."}>
              <Saved />
            </Suspense>
          }
        />
        <Route
          path="collection"
          element={
            <Suspense fallback={"Loading..."}>
              <Collection />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <Suspense fallback={"Loading..."}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="settings"
          element={
            <Suspense fallback={"Loading..."}>
              <Settings />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default Nav;

import { useContext, lazy, Suspense } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { DarkLightContext } from "../MarketP";
import SplitPane from 'react-split-pane';
import LogoEnft from "../../../assets/Icons/Logo.webp";
import DashBoardCurrent from "../../../assets/Icons/DashBoard.webp";
import DashBoard from "../../../assets/Icons/DashBoard.png";

import Bids from "../../../assets/Icons/bid.webp";
import favorite from "../../../assets/Icons/heart.png";
import collection from "../../../assets/Icons/Collection.webp";
import profile from "../../../assets/Icons/Profile.webp";
import settings from "../../../assets/Icons/settings.png";
import SettingIn from "../../../assets/Icons/settingsIn.webp";
import BinIn from "../../../assets/Icons/bid-active.webp";
import favoriteIn from "../../../assets/Icons/heartIn.png";
import collectionIn from "../../../assets/Icons/CollectionIn.webp";
import profileIn from "../../../assets/Icons/ProfileIn.webp";
import sun from "../../../assets/Icons/mode.webp";
import moon from "../../../assets/Icons/halfMoon.png";
import notifications from "../../../assets/Icons/bell.webp";
import notificationsLight from "../../../assets/Icons/bell.png";
import logOut from "../../../assets/Icons/sign-out.webp";
import Search from "../../../assets/Icons/Search.webp";

const Bid = lazy(() => import("../Main/MainBody1/Bid"));
const Saved = lazy(() => import("../Main/MainBody2/Saved"));
const Collection = lazy(() => import("../Main/MainBody3/Collection"));
const Profile = lazy(() => import("../Main/MainBody4/Profile"));
const Settings = lazy(() => import("../Main/MainBody5/Settings"));

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

const Nav = (props) => {
  const darkLight = useContext(DarkLightContext);
  const location = useLocation();
  return (
    <div className="h-full w-16">
      <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={100}
      resizerStyle={styles}
    >
      <nav className="h-full w-16">
        <section className=" fixed top-0 right-0 w-[94%] flex  items-center justify-between py-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter text"
              className="pl-12 text-white pr-20  py-3 border-none bg-[#1D1932] rounded-md ml-10 w-full"
            />
            <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
              <img
                src={Search}
                alt="Icon"
                className="  w-6 h-16 object-contain"
              />
            </div>
          </div>
          <div className=" flex items-center justify-between w-28 mr-16">
            <button
              className={`${darkLight.darkMode ? "active" : ""}`}
              onClick={() => darkLight.setDarkMode(!darkLight.darkMode)}
            >
              {darkLight.darkMode ? (
                <img
                  src={sun}
                  alt="darkMode"
                  className="object-contain border-none ring-0 outline-none"
                />
              ) : (
                <img
                  src={moon}
                  alt="light mode"
                  className="object-cover border-none ring-0 outline-none"
                />
              )}
            </button>

            <img
              src={darkLight.darkMode ? notifications : notificationsLight}
              alt=" Notifications"
              className=" cursor-pointer "
            />

            <img
              src={
                "https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=AA65CD,9F28B8,4588C0,6512A2,60389D"
              }
              alt="image"
              className=" w-10 ml-2 cursor-auto"
            />
          </div>
        </section>
        <section className=" fixed flex flex-col items-center bg-[#1D1932] justify-top w-16 h-full left-0">
          <Link className="mt-7 mb-8  w-10" to="/marketplace">
            <img src={LogoEnft} alt=" our Logo" />
          </Link>
          <div className=" child:my-7 flex flex-col items-center">
            <Link to="/marketplace">
              <img
                src={
                  location.pathname == "/marketplace"
                    ? DashBoardCurrent
                    : DashBoard
                }
                alt="DashBoard"
              />
            </Link>
            <Link to="bids">
              <img
                src={location.pathname == "/marketplace/bids" ? BinIn : Bids}
                alt="Bids"
              />
            </Link>
            <Link to="saved">
              <img
                src={
                  location.pathname == "/marketplace/saved"
                    ? favoriteIn
                    : favorite
                }
                alt="favorite nft's"
                className=" w-5 h-5 object-cover"
              />
            </Link>
            <Link to="collection">
              <img
                src={
                  location.pathname == "/marketplace/collection"
                    ? collectionIn
                    : collection
                }
                alt="collection"
              />
            </Link>
            <Link to="profile">
              <img
                src={
                  location.pathname == "/marketplace/profile"
                    ? profileIn
                    : profile
                }
                alt="profile"
              />
            </Link>
            <Link to="settings">
              <img
                src={
                  location.pathname == "/marketplace/settings"
                    ? SettingIn
                    : settings
                }
                alt="settings"
                className=" w-5"
              />
            </Link>
          </div>
          <button onClick={props.loggingOut} className=" mb-24 mt-auto">
            <img src={logOut} alt="Sign out" />
          </button>
        </section>
      </nav>
      <div>
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
      </SplitPane>
    </div>
  );
};

export default Nav;

import { useContext, useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { DarkLightContext } from "../MarketP";
import SplitPane from "react-split-pane";
import LogoEnft from "../../../assets/Icons/Logo.webp";
import DashBoardCurrent from "../../../assets/Icons/homehover.png";
import DashBoard from "../../../assets/Icons/homeStatic.png";
import Bids from "../../../assets/Icons/bid.webp";
import favorite from "../../../assets/Icons/heart.webp";
import collection from "../../../assets/Icons/Collection.webp";
import profile from "../../../assets/Icons/Profile.webp";
import settings from "../../../assets/Icons/settings.webp";
import SettingIn from "../../../assets/Icons/settingsIn.webp";
import BinIn from "../../../assets/Icons/bid-active.webp";
import favoriteIn from "../../../assets/Icons/heartIn.webp";
import collectionIn from "../../../assets/Icons/CollectionIn.webp";
import profileIn from "../../../assets/Icons/ProfileIn.webp";
import sun from "../../../assets/Icons/mode.webp";
import moon from "../../../assets/Icons/halfMoon.webp";
import notifications from "../../../assets/Icons/bell.webp";
import notificationsLight from "../../../assets/Icons/bell.webp";
import logOut from "../../../assets/Icons/sign-out.webp";
import Search from "../../../assets/Icons/Search.webp";
import searchLight from "../../../assets/Icons/searchLight.webp";

const Nav = (props) => {
  const darkLight = useContext(DarkLightContext);
  let [responsive, setResponse] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function HeightCha2() {
      if (window.scrollY > 60) {
        setResponse(() => (responsive = true));
      } else {
        setResponse(() => (responsive = false));
      }
    }

    window.addEventListener("scroll", HeightCha2);
    return () => window.removeEventListener("scroll", HeightCha2);
  }, []);

  return (
    <div className="h-full w-screen xlsm:w-16">
      <SplitPane split="vertical">
        <nav className="h-full  relative w-16 z-50">
          <section
            className={`
            ${
              responsive
                ? darkLight.darkMode
                  ? "bg-[#141129]"
                  : "bg-[#F2F2F2]"
                : "bg-transparent"
            }
             transition-all fixed top-0 phone:right-[0%] phone:px-3 xlsm:px-0 xlsm:right-0  phone:w-full xlsm:w-[92%] ssm:w-[94%] flex items-center justify-between py-6`}
          >
            <img src={LogoEnft} className="xlsm:hidden phone:block w-10 " />

            <div className="relative">
              <input
                type="text"
                placeholder="Search "
                className={`xlsm:pl-12 ssm:pr-20 font-poppi font-medium py-3 border-none ${
                  darkLight.darkMode
                    ? "text-white bg-[#1D1932]"
                    : "bg-[#FFFFFF] text-black"
                } phone:rounded-md rounded-md phone:ml-4 xlsm:ml-10 w-9/12  ssm:w-full`}
              />
              <div className="phone:hidden xlsm:block absolute left-14 top-1/2 transform -translate-y-1/2">
                <img
                  src={darkLight.darkMode ? Search : searchLight}
                  alt="Icon"
                  className="  w-6 h-16 object-contain"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between phone:w-11/12 xlsm:w-28 xlsm:mr-7 sss:mr-16">
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
                className=" w-10  cursor-auto"
              />
            </div>
          </section>
          <section
            className={` fixed phone:bottom-0  xlsm:top-0 flex phone:flex-row xlsm:flex-col  items-center ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } phone:justify-around xlsm:justify-top phone:w-full phone:h-16 xlsm:w-16 xlsm:h-full xlsm:left-0`}
          >
            <Link
              className="xlsm:block phone:hidden mt-7 mb-8  w-10"
              to="/marketplace"
            >
              <img src={LogoEnft} alt=" our Logo" />
            </Link>
            <div className=" child:my-7 flex phone:flex-row phone:justify-around xlsm:justify-normal w-11/12 xlsm:flex-col items-center">
              <Link to="/marketplace">
                <img
                  width="25px"
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
              <button
                onClick={props.loggingOut}
                className="phone:block xlsm:hidden mb-24 mt-auto"
              >
                <img src={logOut} alt="Sign out" />
              </button>
            </div>
            <button
              onClick={props.loggingOut}
              className="xlsm:block phone:hidden mb-24 mt-auto"
            >
              <img src={logOut} alt="Sign out" />
            </button>
          </section>
        </nav>
        <div className=" z-40">
          <Routes>
            <Route path="settings" />
            <Route path="bids" />
            <Route path="saved" />
            <Route path="collection" />
            <Route path="profile" />
            <Route path="settings" />
          </Routes>
        </div>
      </SplitPane>
    </div>
  );
};

export default Nav;

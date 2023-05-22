import { useEffect, lazy, Suspense } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, createContext } from "react";
import LoadingComp from "../../loading/LoadingComp";
import MarketPBody from "./MarketPlaceBody/MarketPBody";

const Bid = lazy(() => import("./Main/MainBody1/Bid"));
const Saved = lazy(() => import("./Main/MainBody2/Saved"));
const Collections = lazy(() => import("./Main/MainBody3/Collection"));
const Profile = lazy(() => import("./Main/MainBody4/Profile"));
const Settings = lazy(() => import("./Main/MainBody5/Settings"));
const Nav = lazy(() => import("./NavSearch/Nav"));

export const DarkLightContext = createContext();
export const SavedContext = createContext();

const MarketPlace = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [saved, setSaved] = useState([]);
  const navigate2 = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate2("/");
      }
    });
  });
  const navigate = useNavigate();
  const logOut = () => {
    return signOut(auth);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("You're logged out successfully");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <DarkLightContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`${
          darkMode ? "dark" : "light"
        } w-full  h-fit  transition-all`}
      >
        <div className=" overflow-hidden">
          <Suspense fallback={<LoadingComp />}>
            <Nav loggingOut={handleLogout} />
            <SavedContext.Provider value={{ saved, setSaved }}>
              <main className="relative h-fit">
                <Suspense fallback={"Loading..."}>
                  {location.pathname == "/marketPlace" ||
                  location.pathname == "/marketplace" ? (
                    <MarketPBody />
                  ) : (
                    ""
                  )}
                  {location.pathname == "/marketplace/bids" ||
                  location.pathname == "/marketPlace/bids" ? (
                    <Bid />
                  ) : (
                    ""
                  )}
                  {location.pathname == "/marketplace/saved" ||
                  location.pathname == "/marketPlace/saved" ? (
                    <Saved />
                  ) : (
                    ""
                  )}
                  {location.pathname == "/marketplace/collection" ||
                  location.pathname == "/marketPlace/collection" ? (
                    <Collections />
                  ) : (
                    ""
                  )}
                  {location.pathname == "/marketplace/profile" ||
                  location.pathname == "/marketPlace/profile" ? (
                    <Profile />
                  ) : (
                    ""
                  )}
                  {location.pathname == "/marketplace/settings" ||
                  location.pathname == "/marketPlace/settings" ? (
                    <Settings />
                  ) : (
                    ""
                  )}
                </Suspense>
              </main>
            </SavedContext.Provider>
          </Suspense>
        </div>
      </div>
    </DarkLightContext.Provider>
  );
};

export default MarketPlace;

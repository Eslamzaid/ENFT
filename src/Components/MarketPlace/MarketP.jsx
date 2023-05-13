import { useEffect, lazy, Suspense } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useContext, createContext } from "react";
import LoadingComp from "../../loading/LoadingComp";
const Nav = lazy(() => import("./NavSearch/Nav"));

export const DarkLightContext = createContext();

const MarketPlace = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate2 = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;
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
        } w-screen h-screen  transition-all`}
      >
        <Suspense fallback={<LoadingComp />}>
          <Nav loggingOut={handleLogout} hi={"HI"} />
        </Suspense>
      </div>
    </DarkLightContext.Provider>
  );
};

export default MarketPlace;

import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import loadable from "@loadable/component";
import { lazy } from "@loadable/component";
import { useNavigate } from "react-router-dom";
import Sign from "./LoginSign/Sign";
import SignUp from "./LoginSign/SignUp";

const LoadingComp = loadable(() => import("./loading/LoadingComp"));
const LandingP = loadable(() => import("./Components/LandingPage/LandingP"));
const MarketPlace = lazy(() => import("./Components/MarketPlace/MarketP"));

function App() {
  let [here, setHere] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setHere(() => (here = true));
        navigate("/marketplace");
      } else {
        setHere(() => (here = false));
      }
    });
  });
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  }, []);

  return (
    <div className=" scroll-smooth w-full h-full overflow-x-hidden">
      {here ? "" : isLoading ? <LoadingComp /> : <LandingP />}
    </div>
  );
}

export default App;

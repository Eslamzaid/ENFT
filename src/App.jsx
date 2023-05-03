import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import loadable from "@loadable/component";
import { lazy } from "@loadable/component";
import Sign from "./LoginSign/Sign";
import SignUp from "./LoginSign/SignUp";

const LoadingComp = loadable(() => import("./loading/LoadingComp"));
const LandingP = loadable(() => import("./Components/LandingPage/LandingP"));
const MarketPlace = lazy(() => import("./Components/MarketPlace/MarketP"));

function App() {
  let [here, setHere] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setHere(() => (here = true));
    } else {
      setHere(() => (here = false));
    }
  });
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className=" w-full h-full overflow-x-hidden">
      {here ? (
        isLoading ? (
          <LoadingComp />
        ) : (
          <MarketPlace />
        )
      ) : isLoading ? (
        <LoadingComp />
      ) : (
        <LandingP />
      )}
    </div>
  );
}

export default App;

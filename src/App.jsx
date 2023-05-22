import React, { useState, useEffect, Suspense } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import loadable from "@loadable/component";
import { lazy } from "@loadable/component";
import { useNavigate } from "react-router-dom";

const LoadingComp = loadable(() => import("./loading/LoadingComp"));
const LandingP = React.lazy(() => import("./Components/LandingPage/LandingP"));
const MarketPlace = lazy(() => import("./Components/MarketPlace/MarketP"));

function App() {
  let [here, setHere] = useState(null);
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

  return (
    <div className="dark scroll-smooth w-full h-full overflow-x-hidden">
      {here ? (
        <MarketPlace />
      ) : (
        <Suspense fallback={<LoadingComp />}>
          <LandingP />
        </Suspense>
      )}
    </div>
  );
}

export default App;

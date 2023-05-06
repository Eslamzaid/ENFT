import { useRef, createContext, useState } from "react";
import Nav from "./Nav/Nav";
import loadable from "@loadable/component";
import { lazy } from "@loadable/component";
const Main = loadable(() => import("./Main/Main"));
const Footer = lazy(() => import("./Footer/Footer"));

export const theMainCon = createContext();
const LandingP = () => {
  const [open, setOpen] = useState(false)

  const home = useRef(null);
  const homeLoc = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ref2 = useRef(null);
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fin = useRef(null);
  const finalClick = () => {
    fin.current?.scrollIntoView({ behavior: "smooth" });

    
  };

  return (
    <theMainCon.Provider
      value={{
        homePage: home,
        homePLoc: homeLoc,
        one: ref,
        two: handleClick,
        three: ref2,
        four: handleClick2,
        seven: fin,
        eight: finalClick,
        open,
        setOpen
      }}
    >
      <div className=" bg-no-repeat bg-contain w-full h-full flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden">
        <Nav />
        <main className=" mb-9 max-w-[180rem] z-50 w-full h-full bg-no-repeat bg-top bg-cover overflow-x-hidden">
          <Main />
        </main>
        <Footer />
      </div>
    </theMainCon.Provider>
  );
};

export default LandingP;

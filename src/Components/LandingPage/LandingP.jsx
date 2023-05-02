import { useRef, useContext, createContext } from "react";
import Nav from "./Nav/Nav";
import Nbody from "./Nav/NavB/Nbody";
import FNBody from "./Nav/NavB/FNBody";
import loadable from "@loadable/component";
import Shades from "./../../assets/images/Images/NavShades.png";
import FPol from "./../../assets/Icons/Mask group.png";
const MainP1 = loadable(() => import("./Main/MainP1/MainP1"));

export const theMainCon = createContext();

const LandingP = () => {
  const Home = useRef(null);
  const focusInput = () => {
    Home.current.focus();
  };

  const MarketPlace = useRef();
  const focusInput2 = () => {
    MarketPlace.current.focus();
  };

  const Collection = useRef();
  const focusInput3 = () => {
    Collection.current.focus();
  };

  const Articles = useRef();
  const focusHero = () => {
    Articles.current.focus();
  };

  const BidNow = useRef();
  const FinalFocus = () => {
    BidNow.current.focus();
  };

  return (
    <theMainCon.Provider
      value={{
        one: Home,
        oneDir: focusInput,

        two: MarketPlace,
        twoDir: focusInput2,

        three: Collection,
        threeDir: focusInput3,

        four: Articles,
        fourDir: focusHero,

        five: BidNow,
        fiveDir: FinalFocus,
      }}
    >
      <article className=" bg-no-repeat bg-contain w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden">
        <nav
          style={{ backgroundImage: `url('${Shades}')` }}
          className="bg-cover sticky top-0 bg-no-repeat w-screen flex flex-col justify-start items-center z-[111111111111111111] max-w-[180rem]"
        >
          <Nav />
        </nav>
        <main
          style={{ backgroundImage: `url('${FPol}')` }}
          className=" max-w-[180rem] z-50 w-screen bg-no-repeat bg-cover h-fit"
        >
          <div className=" w-screen flex flex-col justify-center items-center">
            <Nbody />
            <FNBody />
          </div>
          <MainP1 />
        </main>
      </article>
    </theMainCon.Provider>
  );
};

export default LandingP;

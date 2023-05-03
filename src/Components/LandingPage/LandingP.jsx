import { useRef, createContext } from "react";
import Nav from "./Nav/Nav";
import loadable from "@loadable/component";

const Main = loadable(() => import("./Main/Main"));

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
      <body className=" bg-no-repeat bg-contain w-full h-full flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden">
        <Nav />
        <main className=" mb-96 max-w-[180rem] z-50 w-full h-full bg-no-repeat bg-top bg-cover overflow-x-hidden">
          <Main />
        </main>
      </body>
    </theMainCon.Provider>
  );
};

export default LandingP;

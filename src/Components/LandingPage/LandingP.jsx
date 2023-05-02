import { useRef, createContext, useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import loadable from "@loadable/component";
import FPol from "./../../assets/Icons/Mask group.png";


const MainP1 = loadable(() => import("./Main/MainP1/MainP1"));

export const theMainCon = createContext();



const LandingP = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const HandleHeight = () => {
      console.log(window.scrollY)
    }
    console.log(window.scrollY)
  
  
    window.addEventListener('scroll', HandleHeight)
    
  },[window.scrollY])

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
        <Nav />
        <main
          style={{ backgroundImage: `url('${FPol}')` }}
          className=" max-w-[180rem] z-50 w-screen bg-no-repeat bg-cover h-fit"
        >
          <MainP1 />
        </main>
      </article>
    </theMainCon.Provider>
  );
};

export default LandingP;

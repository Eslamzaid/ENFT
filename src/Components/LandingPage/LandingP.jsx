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
  const Marketplace = useRef();
  const marketPlaceRef = () => {
    Marketplace.current.focus();
  };

  const Collection = useRef();
  const CollectionRef = () => {
    Collection.current.focus();
  };

  const Articles = useRef();
  const ArticlesRef = () => {
    Articles.current.focus();
  };

  const BidNow = useRef();
  const BidNowRef = () => {
    BidNow.current.focus();
  };

  const myData = {
    testText: "heelopLEASEOWORDK",
    marketRef: Marketplace,
    market: marketPlaceRef,
    marketRef: Collection,
    collect: CollectionRef,
    collectRef: Articles,
    article: ArticlesRef,
    bidNowRef: BidNow,
    articleRef: BidNowRef,

  };
  return (
    <theMainCon.Provider value={{ myData }}>
      <article className=" bg-no-repeat bg-contain w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden">
        <nav
          style={{ backgroundImage: `url('${Shades}')` }}
          className="bg-cover bg-no-repeat w-screen flex flex-col justify-start items-center relative max-w-[180rem]"
        >
          <Nav />
          <Nbody />
        </nav>
        <main
          style={{ backgroundImage: `url('${FPol}')` }}
          className=" max-w-[180rem] z-50 w-screen bg-no-repeat bg-cover h-fit"
        >
          <FNBody />

          <MainP1 />
        </main>
      </article>
    </theMainCon.Provider>
  );
};

export default LandingP;

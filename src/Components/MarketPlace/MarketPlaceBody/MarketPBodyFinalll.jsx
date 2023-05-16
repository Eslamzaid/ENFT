import { useContext } from "react";
import { DarkLightContext } from "../MarketP";
import loadable from "@loadable/component";
const LineD = loadable(() => import("./lineD"));
import artWorks from "./../../../assets/Icons/artworkds.webp";
import acution from "./../../../assets/Icons/Artwork.webp";
import creators from "./../../../assets/Icons/creators.webp";
import Chart from "./../../../assets/Icons/Chart.webp";

const MarketPBodyFinalll = () => {
  const darkLight = useContext(DarkLightContext);
  //#FFFFFF
  // dark: #1D1932
  return (
    <div
      className={`flex justify-between bg-red-400 ${
        darkLight.darkMode ? "text-white" : "text-black"
      }`}
    >
      <div
        className={` child: flex flex-col ${
          darkLight.darkMode ? "child:bg-[#1D1932]" : "child:bg-[#FFFFFF]"
        }`}
      >
        <h2 className=" font-headerFont text-3xl bg-black">Overview</h2>
        <div className=" child:py-3 child:px-3 child:bg-red-300 flex justify-between text-left">
          <img src={artWorks} alt="Artworks" />
          <div>
            <h3>24K</h3>
            <p>Artworks</p>
          </div>
          <p>+168.001%</p>
        </div>
        <div>
          <img src={acution} alt="Auction" />
          <h3>89</h3>
          <p>Auction</p>
          <p>-8.001%</p>
        </div>
        <div>
          <img src={creators} alt="Creators" />
          <h3>82k</h3>
          <p>Creators</p>
          <p>+53.001%</p>
        </div>
      </div>
      <div>
        <h2>ETH price</h2>
        <LineD />
      </div>
      <div>
        <div>
          <img src={Chart} alt="Statistics" />
          <p>Artwork Sold</p>
          <p>Artwork Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default MarketPBodyFinalll;

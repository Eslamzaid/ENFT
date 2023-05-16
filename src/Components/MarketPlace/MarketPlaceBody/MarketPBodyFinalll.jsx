import { useContext } from "react";
import { DarkLightContext } from "../MarketP";
import loadable from "@loadable/component";
const LineD = loadable(() => import("./lineD"));
import artWorks from "./../../../assets/Icons/artworkds.webp";
import acution from "./../../../assets/Icons/Artwork.webp";
import creators from "./../../../assets/Icons/creators.webp";
import Chart from "./../../../assets/Icons/Chart.webp";
import ChartW from "./../../../assets/Icons/ChartWhite.webp";

const MarketPBodyFinalll = () => {
  const darkLight = useContext(DarkLightContext);
  //#FFFFFF
  // dark: #1D1932
  return (
    <div
      className={`flex flex-wrap justify-between gap-x-6 items-center w-full ${
        darkLight.darkMode ? "text-white " : "text-black"
      }`}
    >
      <div className={` flex flex-col child:my-4 flex-none`}>
        <h2 className=" font-headerFont text-3xl text-left">Overview</h2>
        <div
          className={` rounded-xl ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          }`}
        >
          <div className="flex justify-between items-center p-4 text-left">
            <img
              className="mr-5 bg-[#6F4FF2] p-4 rounded-full"
              src={artWorks}
              alt="Artworks"
            />
            <div>
              <h3 className=" font-semibold text-3xl font-poppi">24K</h3>
              <p className=" text-[#68676E] text-sm">Artworks</p>
            </div>
            <p className=" text-[#50BB25] relative bottom-6 ml-8 mr-2">
              +168.001%
            </p>
          </div>
        </div>
        <div
          className={` rounded-xl ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          }`}
        >
          <div className="flex justify-between items-center p-4 text-left">
            <img
              src={acution}
              alt="Auction"
              className="bg-[#DC3546] p-4 rounded-full"
            />
            <div className=" relative right-5">
              <h3 className="font-semibold text-3xl font-poppi">89</h3>
              <p className=" text-[#68676E] text-sm">Auction</p>
            </div>
            <p className=" text-[#DC3546] relative bottom-6 right-4  mr-2">
              -8.001%
            </p>
          </div>
        </div>
        <div
          className={` rounded-xl ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          }`}
        >
          <div className="flex justify-between items-center p-4 text-left">
            <img
              className="mr- bg-[#50BB25] p-4 rounded-full"
              src={creators}
              alt="Creators"
            />
            <div>
              <h3 className=" font-semibold text-3xl font-poppi">82k</h3>
              <p className=" text-[#68676E] text-sm">Creators</p>
            </div>
            <p className=" text-[#50BB25] relative bottom-6 ml-8 mr-2">
              +53.001%
            </p>
          </div>
        </div>
      </div>
      <div className=" ddd:w-[40rem] remo:w-[45rem] mt-9 h-[25rem] flex flex-col items-center justify-center">
        <h2 className=" font-headerFont text-3xl text-left relative bottom-9">
          ETH price
        </h2>
        <div
          className={`w-full h-full flex flex-col items-center justify-center rounded-xl ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          }`}
        >
          <LineD />
        </div>
      </div>
      <div className="h-full mr-5">
        <h2 className="relative -top-1 font-headerFont text-3xl text-left">
          Statistics
        </h2>
        <div
          className={`w-80 flex-grow h-full mt-[2rem] rounded-xl ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          }`}
        >
          <div className=" flex flex-col items-center justify-center py-[3rem]">
            <img src={darkLight.darkMode ? Chart : ChartW} alt="Statistics" />
            <div className="flex flex-col text-left relative top-7 child:text-md gap-x-4">
              <p className=" before:w-5 before:h-5 before:bg-red-400">
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 bg-[#724FF2] mr-2 ${
                    darkLight.darkMode ? "border" : ""
                  }`}
                ></span>
                Artwork Sold
              </p>
              <p>
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 mr-2 ${
                    darkLight.darkMode ? "border bg-[#262049]" : " border border-slate-300 bg-[#F0EDFE]"
                  }`}
                ></span>
                Artwork Cancel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPBodyFinalll;

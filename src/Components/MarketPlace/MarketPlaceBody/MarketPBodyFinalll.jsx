import { useContext } from "react";
import { DarkLightContext } from "../MarketP";
import loadable from "@loadable/component";
const LineD = loadable(() => import("./lineD"));
import artWorks from "./../../../assets/Icons/artworkds.webp";
import acution from "./../../../assets/Icons/canceld.webp";
import creators from "./../../../assets/Icons/creators.webp";
import Chart from "./../../../assets/Icons/Chart.webp";
import ChartW from "./../../../assets/Icons/ChartWhite.webp";

const MarketPBodyFinalll = () => {
  const darkLight = useContext(DarkLightContext);
  return (
    <div
      className={` xlsm:ml-2 flex-wrap flex justify-around gap-x-2 iii:gap-x-6 items-center w-full ${
        darkLight.darkMode ? "text-white " : "text-black"
      }`}
    >
      <div
        className={`phone:w-full sss:w-fit flex flex-col child:my-4 flex-none`}
      >
        <h2 className=" font-headerFont text-3xl text-left">Overview</h2>
        <div
          className={` rounded-xl ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          }`}
        >
          <div className="flex phone:justify-start sss:justify-between items-center phone:p-3 sss:p-2 llg:p-4 text-left">
            <img
              className="phone:mr-8 sss:mr-0 ddd:mr-5 bg-[#6F4FF2] p-3 ddd:p-4 rounded-full"
              src={artWorks}
              alt="Artworks"
            />
            <div>
              <h3 className=" font-semibold text-2xl ddd:text-3xl font-poppi">
                24K
              </h3>
              <p className=" text-[#68676E] text-sm">Artworks</p>
            </div>
            <p className=" phone:hidden sss:block text-[#50BB25] relative bottom-6 ddd:ml-8 mr-2">
              +168.001%
            </p>
          </div>
        </div>
        <div
          className={` rounded-xl ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          }`}
        >
          <div className="flex sss:justify-between items-center phone:p-2 llg:p-4 text-left">
            <img
              src={acution}
              alt="Auction"
              className=" bg-[#DC3546] phone:p-3 ddd:p-4 rounded-full"
            />
            <div className=" sss:relative phone:ml-9 sss:ml-0 right-5">
              <h3 className="font-semibold text-3xl font-poppi">89</h3>
              <p className=" text-[#68676E] text-sm">Auction</p>
            </div>
            <p className=" phone:hidden sss:block text-[#DC3546] relative bottom-6 right-4  mr-2">
              -8.001%
            </p>
          </div>
        </div>
        <div
          className={` rounded-xl ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          }`}
        >
          <div className="flex sss:justify-between items-center phone:p-2 llg:p-4 text-left">
            <img
              className=" bg-[#50BB25] phone:p-3 ddd:p-4 mr-8 sss:mr-2 ddd:ml-0 rounded-full"
              src={creators}
              alt="Creators"
            />
            <div>
              <h3 className=" font-semibold text-3xl font-poppi">82k</h3>
              <p className=" text-[#68676E] text-sm">Creators</p>
            </div>
            <p className="phone:hidden sss:block text-[#50BB25] relative bottom-6 ml-8 mr-2">
              +53.001%
            </p>
          </div>
        </div>
      </div>
      <div className="phone:w-full mmm:w-[20rem] iii:w-[30rem] dxl:w-[40rem] remo:w-[45rem] llgg:w-[60rem] mt-9 h-[25rem] flex flex-col items-center justify-center flex-none">
        <h2 className="w-full font-headerFont text-3xl text-left relative mt-5 mmm:mt-0 phone:bottom-10 sss:bottom-5 llg:bottom-10 ddd:bottom-[3.25rem]">
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
      <div className="h-full sss:mr-5 phone:mb-6 sss:mb-0 grow mx-auto">
        <h2 className="relative mx-auto -top-1 font-headerFont text-3xl mt-7 ggg:mt-0 text-left sss:text-center ">
          Statistics
        </h2>
        <div
          className={`mx-auto phone:w-full mmm:w-60 ddd:w-80 h-full mt-[2rem] rounded-xl ${
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
                    darkLight.darkMode
                      ? "border bg-[#262049]"
                      : " border border-slate-300 bg-[#F0EDFE]"
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

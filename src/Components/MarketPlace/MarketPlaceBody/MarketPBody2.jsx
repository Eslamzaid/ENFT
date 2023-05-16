import { useContext } from "react";
import data from "./dataM";
import { DarkLightContext } from "../MarketP";

const MarketPBody2 = () => {
  const DarkLight = useContext(DarkLightContext);
  return (
    <div className={` ${DarkLight.darkMode ? "text-white" : "text-black"}`}>
      <h2 className=" ml-4 text-2xl  text-left font-headerFont font-medium mb-10">
        Trending Bids
      </h2>
      <div className=" msm:mr-10 w-full px-3 phone:grid grid-cols-1 xlsm:grid-cols-2 imd:grid-cols-3 llg:grid-cols-4 gap-x-8 gap-y-8">
        {data.map((item) => {
          return (
            <div
              className={` px-5 py-4 msm:px-8 msm:py-6 rounded-[23px]
            ${DarkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"}`}
            >
              <img src={item.nft} className=" rounded-3xl" alt={item.nftAlt} />
              <h3 className="mt-10 mb-5 text-left font-headerFont text-2xl font-medium">
                {item.nftName}
              </h3>
              <div className=" flex justify-between relative font-poppi w-full">
                <div className=" text-left">
                  <h4 className="text-sm xlsm:text-sm msm:text-md font-medium">
                    Auction
                  </h4>
                  <p className="mt-7 text-[#6C7AA0] text-sm msm:text-ms absolute bottom-0">
                    {item.time}
                  </p>
                </div>
                <div className="text-right">
                  <h3 className="text-sm xlsm:text-sm msm:text-md font-medium mb-2">
                    Current Bid
                  </h3>
                  <p className=" text-[#6F4FF2] text-sm">{item.currentBid}</p>
                  <p className=" text-md mt-1">{item.totalBids}</p>
                </div>
              </div>
              <button
                className={`${
                  DarkLight.darkMode ? "text-white" : "text-white"
                } hover:text-slate-300 hover:bg-[#6446e0] transition-all hover:outline outline-offset-4 outline-blue-800 bg-[#6F4FF2] w-full mt-10 py-5 text-lg font-semibold rounded-2xl`}
              >
                Place a Bid
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketPBody2;

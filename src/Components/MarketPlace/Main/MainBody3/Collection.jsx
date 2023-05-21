import { useState, useContext, useCallback } from "react";
import Data1 from "./DataM1";
import Data2 from "./DataM2";
import Data3 from "./DataM3";
import { DarkLightContext } from "../../MarketP";
import { SavedContext } from "../../MarketP";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const All = Data2.concat(Data1.concat(Data3));
  const [data, setData] = useState(All);
  const darkLight = useContext(DarkLightContext);
  const IsSaved = useContext(SavedContext);
  const addToSavedList = useCallback(
    (item) => {
      IsSaved.setSaved((prevSaved) => [...prevSaved, item]);
    },
    [IsSaved.setSaved]
  );
  const removeFromSavedList = (itemId) => {
    IsSaved.setSaved((prevSaved) =>
      prevSaved.filter((item) => item.id !== itemId)
    );
  };
  const navigate = useNavigate();

  const handleData = (data) => {
    setData(() => data);
  };
  return (
    <section
      className={`relative flex flex-col gap-y-6 phone:w-full phone:min-h-[110rem] xlsm:min-h-[60rem] xlsm:w-[92%] ml-0 xlsm:ml-auto h-full mt-20 overflow-x-hidden text-left ${
        darkLight.darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className=" flex justify-between items-end phone:ml-3 xlsm:ml-10 mmd:ml-0">
        <div>
          <h1 className="mt-10 text-4xl font-headerFont font-semibold">Collections</h1>
        </div>
        <p className=" mr-4 esm:mr-16 font-poppi text-xs font-ligth child:cursor-pointer">
          <span
            className="hover:border-b transition-all"
            onClick={() => navigate("/marketplace")}
          >
            Home
          </span>{" "}
          {">"} <span className="hover:border-b transition-all">Collections</span>
        </p>
      </div>
      <div className="phone:ml-0 relative xlsm:ml-4 sss:ml-0 child:mx-4 child:transition-all transition-all phone:child:px-4 lsxm:child:px-6 child:py-3 font-headerFont font-medium child:rounded-lg">
        <button
          onClick={() => handleData(All)}
          className={
            data == Data1 || data == Data2 || data == Data3
              ? ""
              : "bg-[#6F4FF2]"
          }
        >
          All
        </button>
        <button
          onClick={() => handleData(Data2)}
          className={data == Data2 ? "bg-[#6F4FF2]" : ""}
        >
          Art
        </button>
        <button
          onClick={() => handleData(Data1)}
          className={data == Data1 ? "bg-[#6F4FF2]" : ""}
        >
          Sports
        </button>
        <button
          onClick={() => handleData(Data3)}
          className={data == Data3 ? "bg-[#6F4FF2]" : ""}
        >
          Others
        </button>
      </div>
      <div className="mb-20 phone:ml-0 xlsm:ml-4 sss:ml-0 msm:mr-96 w-full px-3 phone:grid grid-cols-1 xlsm:grid-cols-2 imd:grid-cols-3 llg:grid-cols-4 gap-x-6 sss:gap-x-8 gap-y-8">
        {data.map((item) => {
          const isSaved = IsSaved.saved.some(
            (savedItem) => savedItem.id === item.id
          );
          return (
            <div
              key={item.id}
              className={` px-5 py-4 msm:px-8 msm:py-6 rounded-[23px]
            ${darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"}`}
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
              <div className=" flex gap-x-2">
                <button
                  className={`${
                    darkLight.darkMode ? "text-white" : "text-white"
                  } hover:text-slate-300 hover:bg-[#6446e0] transition-all hover:outline outline-offset-4 outline-blue-800 bg-[#6F4FF2] w-full mt-10 py-5 text-lg font-semibold rounded-2xl`}
                >
                  Bid now
                </button>
                {isSaved ? (
                  <button
                    onClick={() => removeFromSavedList(item.id)}
                    className={`${
                      darkLight.darkMode ? "text-white" : "text-white"
                    } hover:text-slate-300 hover:bg-[#6446e0] transition-all hover:outline outline-offset-4 outline-blue-800 bg-[#6F4FF2] w-full mt-10 py-5 text-lg font-semibold rounded-2xl`}
                  >
                    Unsave
                  </button>
                ) : (
                  <button
                    onClick={() => addToSavedList(item)}
                    className={`${
                      darkLight.darkMode ? "text-white" : "text-white"
                    } hover:text-slate-300 hover:bg-[#6446e0] transition-all hover:outline outline-offset-4 outline-blue-800 bg-[#6F4FF2] w-full mt-10 py-5 text-lg font-semibold rounded-2xl`}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Collections;

import { useContext } from "react";
import backFirst from "./../../../assets/Icons/BackWithImage.webp";
import redNft from "./../../../assets/images/nfts/NFT.webp";
import verfiedUser from "./../../../assets/images/Users/Verifi2.webp";
import { DarkLightContext } from "../MarketP";
import MarketPBody2 from "./MarketPBody2";

const MarketPBody = () => {
  const darkLight = useContext(DarkLightContext);
  return (
    <article
      className={` flex flex-col items-center phone:w-full xlsm:w-[92%] ml-0 xlsm:ml-auto h-full overflow-x-hidden text-center`}
    >
      <section className=" relative mt-28 w-full ml-0 xlsm:ml-auto flex phone:flex-col justify-center sss:flex-row sss:justify-between items-center sss:gap-x-7 ssm:gap-x-10 mb-5">

        <div
          className=" [&>h1]:z-20 [&>h1]:relative [&>p]:z-20 [&>p]:relative
                         xlsm:ml-5 w-11/12 sss:w-96 lg:w-[80%] slg:ml-0 slg:w-full h-72 relative text-white
                         "
        >
          <img
            src={backFirst}
            className=" absolute z-10 top-2 w-[53rem] h-[18rem] object-cover rounded-3xl"
            alt="Marketplace"
          />
          <h1 className=" relative text-xl xlsm:text-2xl slg:text-4xl ml-8 mt-10 font-headerFont font-semibold text-left">
            Discover, Collect, Sell
            <br /> and Create your NFT
          </h1>
          <p className=" text-left ml-8 text-sm mr-20 sss:mr-1 text-[#B7A7F9] font-poppi my-6">
            Digital marketplace for crypto collectibles and non fungible tokens
          </p>
          <div className=" z-20 relative font-semibold child:transition-all font-poppi text-left mt-12 ml-8">
            <button className=" hover:bg-[#6a49f2] hover:text-slate-200 mr-5 bg-[#6F4FF2] px-6 py-2 slg:px-10 slg:py-3 rounded-lg">
              Explore
            </button>
            <button className=" hover:bg-[#cc3343] hover:text-slate-200 bg-[#DC3546] px-6 py-2 slg:px-10 slg:py-3 rounded-lg">
              Create
            </button>
          </div>
        </div>
        <div
          className={` py-6 xlsm:ml-5 w-11/12 mt-20 sss:w-96 lg:w-[80%] slg:ml-0 slg:w-full sss:mr-16 h-full sss:mt-4 rounded-[23px] flex phone:flex-col sss:flex-row justify-between items-center ${
            darkLight.darkMode
              ? "bg-[#1D1932] text-white"
              : "bg-[#FFFFFF] text-black"
          }`}
        >
          <div className=" mt-4 sss:mt-0 flex  justify-center sss:block">
            <img
              src={redNft}
              alt="fluid nft "
              className=" rounded-[23px] 
                ml-4 w-10/12 h-5/12 xlsm:w-96 sss:w-48 sss:h-60 lsmd:w-60 object-cover"
            />
          </div>
          <div className="w-10/12 xlsm:w-2/3 h-fit ml-7 imd:ml-9 phone:mt-7 mr-3 flex flex-col items-start">
            <div className=" flex items-center  ">
              <img
                src={verfiedUser}
                alt="user logo"
                className="rounded-full w-8 imd:w-12 dxl:w-fit phone:mr-2 imd:mr-4"
              />
              <h2 className="text-sm imd:text-lg font-medium font-headerFont">
                user#999
              </h2>
              <span className="relative flex h-3 w-3 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
            <h3 className="phone:text-sm imd:text-md dxl:text-2xl font-semibold mt-3 font-poppi">
              Birghten LQ
            </h3>

            <div className=" flex justify-between text-left dxl:relative top-3 mt-2 sss:mt-0 dxl:flex-row sss:flex-col flex-row  w-full font-poppi">
              <div className="ddxl:text-md imd:text-sm mt-2 text-xs">
                <h5>Auction time</h5>
                <h5 className=" text-[#6C7AA0] text-left my-2 dxl:my-0 dxl:text-left mt-1">
                  3h 1m 50s
                </h5>
              </div>
              <div className="ddxl:text-md mt-2 imd:text-sm  text-xs">
                <h5>
                  Current Bid :
                  <span className=" text-[#6F4FF2]"> 0.05 ETH</span>
                </h5>
                <h5 className=" text-[#6C7AA0] phone:text-left my-2 dxl:my-0 dxl:text-right">
                  0.15 ETH
                </h5>
              </div>
            </div>

            <div
              className="phone:w-full child:w-1/2 mt-2 text-white phone:text-xs slg:text-sm dxl:text-md dxl:mt-8 phone:child:py-2 xlsm:child:py-3 slg:child:py-3 phone:gap-x-8
                            sss:gap-x-3 child:transition-all child:font-medium child:rounded-lg flex justify-stretch mb-4 sss:mb-0"
            >
              <button className="hover:bg-[#6a49f2] hover:text-slate-200 bg-[#6F4FF2] ">
                Bid
              </button>
              <button className=" hover:bg-[#cc3343] hover:text-slate-200 bg-[#DC3546]">
                Details
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20  msm:ml-5 phone:w-11/12 sss:w-full lg:w-full slg:ml-0 slg:w-full ">
        <MarketPBody2 />
      </section>
    </article>
  );
};

export default MarketPBody;

import { useContext } from "react";
import backFirst from "./../../../assets/Icons/BackWithImage.webp";
import redNft from "./../../../assets/images/nfts/NFT.webp";
import verfiedUser from "./../../../assets/images/Users/Verifi2.webp";
import { DarkLightContext } from "../MarketP";

const MarketPBody = () => {
  const darkLight = useContext(DarkLightContext);
  console.log(darkLight);
  return (
    <article
      className={` flex flex-col items-center h-full overflow-x-hidden text-center`}
    >
      <section className=" relative mt-28 w-[92%] ml-auto flex justify-between items-center gap-x-10   mb-5">
        <div
          className=" [&>h1]:z-20 [&>h1]:relative [&>p]:z-20 [&>p]:relative
                         w-full h-72 relative 
                            text-white 
                         "
        >
          <img
            src={backFirst}
            className=" absolute z-10 top-2 w-[53rem] h-[18rem] object-cover rounded-3xl"
            alt="Marketplace"
          />
          <h1 className=" relative text-4xl ml-8 mt-10 font-headerFont font-semibold text-left">
            Discover, Collect, Sell
            <br /> and Create your NFT
          </h1>
          <p className=" text-left ml-8  text-[#B7A7F9] font-poppi my-6">
            Digital marketplace for crypto collectibles and non fungible tokens
          </p>
          <div className=" z-20 relative font-semibold font-poppi text-left mt-12 ml-8">
            <button className=" mr-5 bg-[#6F4FF2] px-10 py-3 rounded-lg">
              Explore
            </button>
            <button className=" bg-[#DC3546] px-10 py-3 rounded-lg">
              Create
            </button>
          </div>
        </div>

        <div
          className={`w-[90%] mr-16 h-full mt-4 rounded-[23px] flex justify-between items-center  ${
            darkLight.darkMode
              ? "bg-[#1D1932] text-white"
              : "bg-[#FFFFFF] text-black"
          }`}
        >
          <div>
            <img
              src={redNft}
              alt="fluid nft w-96"
              className=" rounded-[23px] 
                ml-4 h-60 object-cover"
            />
          </div>
          <div className=" w-2/3 h-60 ml-9  mr-3 flex flex-col items-start">
            <div className=" flex items-center  ">
              <img
                src={verfiedUser}
                alt="user logo"
                className="rounded-full mr-4"
              />
              <h2 className=" font-medium font-headerFont">
                user#{Math.floor(Math.random() * 1000)}{" "}
              </h2>
              <span className="relative flex h-3 w-3 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
            <h3 className=" text-2xl font-semibold mt-3 font-poppi">
              Birghten LQ
            </h3>

            <div className="flex  justify-between w-full font-poppi">
              <div>
                <h5>Auction time</h5>
                <h5 className=" text-[#6C7AA0] text-left mt-1">3h 1m 50s</h5>
              </div>
              <div>
                <h5>
                  Current Bid :
                  <span className=" text-[#6F4FF2]"> 0.05 ETH</span>
                </h5>
                <h5 className=" text-[#6C7AA0] text-right">0.15 ETH</h5>
              </div>
            </div>

            <div className="w-full child:w-1/2 mt-8 child:py-3 gap-x-8 child:font-medium child:rounded-lg flex justify-stretch">
              <button className="bg-[#6F4FF2] ">Place a Bid</button>
              <button className="bg-[#DC3546]">Details</button>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </article>
  );
};

export default MarketPBody;

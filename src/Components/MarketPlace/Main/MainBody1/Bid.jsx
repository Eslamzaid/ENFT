import { useContext } from "react";
import { DarkLightContext } from "../../MarketP";
import artWorks from "../../../../assets/Icons/artworkds.webp";
import creators from "../../../../assets/Icons/creators.webp";
import cancel from "../../../../assets/Icons/canceld.webp";
import user1 from "../../../../assets/images/nfts/NFT2.webp";
import user2 from "../../../../assets/images/nfts/NFT-2.webp";
import user3 from "../../../../assets/images/nfts/NFT-1.webp";
import close from "../../../../assets/Icons/close.webp";

const Bid = () => {
  const darkLight = useContext(DarkLightContext);
  return (
    <section
      className={`relative flex flex-col gap-y-6 phone:w-full xlsm:w-[92%] ml-0 xlsm:ml-auto h-full mt-20 overflow-x-hidden text-left ${
        darkLight.darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="ml-10 xlsm:ml-10 mmd:ml-0">
        <h1 className="mt-10 text-4xl font-headerFont font-semibold">Bids</h1>
        <p className="font-poppi">Welcome Bids Page</p>
      </div>
      <div
        className={`ml-10 xlsm:ml-10 mmd:ml-0 mr-16 grid gap-6 grid-cols-1 lsxm:grid-cols-2 ssm:grid-cols-3 llg:grid-cols-4 ${
          darkLight.darkMode ? "child:bg-[#1D1932]" : "child:bg-[#FFFFFF]"
        } `}
      >
        <div className="rounded-2xl flex items-center px-6 py-6 font-poppi">
          <img
            src={artWorks}
            className="bg-[#6F4FF2] rounded-full p-3 mr-5 msm:mr-8"
            alt="art works"
          />
          <div>
            <h3 className="text-3xl">24K</h3>
            <p className="text-[#68676E] text-sm">Artworks</p>
          </div>
        </div>
        <div className="rounded-2xl flex items-center px-6 py-6 font-poppi">
          <img
            src={artWorks}
            className="bg-[#50BB25] rounded-full p-3 mr-5 msm:mr-8"
            alt="Auction"
          />
          <div>
            <h3 className="text-3xl">82K</h3>
            <p className="text-[#68676E] text-sm">Auction</p>
          </div>
        </div>
        <div className="rounded-2xl flex items-center px-6 py-6 font-poppi">
          <img
            src={creators}
            className="bg-[#F9D62C] rounded-full p-3 mr-5 msm:mr-8"
            alt="Creators"
          />
          <div>
            <h3 className="text-3xl">200</h3>
            <p className="text-[#68676E] text-sm">Creators</p>
          </div>
        </div>
        <div className="rounded-2xl flex items-center px-6 py-6 font-poppi">
          <img
            src={cancel}
            className="bg-[#DC3546] rounded-full p-3 mr-5 msm:mr-8"
            alt="Cancel"
          />
          <div>
            <h3 className="text-3xl">89</h3>
            <p className="text-[#68676E] text-sm">Canceled</p>
          </div>
        </div>{" "}
      </div>
      <div className="ml-10 xlsm:ml-10 mmd:ml-0 mt-10">
        <div className="flex justify-between mr-16 items-center">
          <h3 className="font-poppi text-2xl">Active Bids</h3>
          <button className="phone:hidden xlsm:block bg-[#6F4FF2] px-7 py-3 rounded-xl cursor-pointer hover:bg-purple-600 transition-colors">
            Place a bid
          </button>
        </div>
        <div className=" my-20">
        
        </div>
      </div>
    </section>
  );
};

export default Bid;

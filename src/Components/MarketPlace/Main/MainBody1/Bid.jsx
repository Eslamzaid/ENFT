import { useContext, useState } from "react";
import { DarkLightContext } from "../../MarketP";
import artWorks from "../../../../assets/Icons/artworkds.webp";
import creators from "../../../../assets/Icons/creators.webp";
import cancel from "../../../../assets/Icons/canceld.webp";
import user1 from "../../../../assets/images/nfts/NFT2.webp";
import user2 from "../../../../assets/images/nfts/NFT-2.webp";
import user3 from "../../../../assets/images/nfts/NFT-1.webp";
import user4 from "../../../../assets/images/nfts/solidLiquid.webp";
import close from "../../../../assets/Icons/close.png";
import closeBlack from "../../../../assets/Icons/closeBlack.png";

const Bid = () => {
  const darkLight = useContext(DarkLightContext);
  const [buttonNum, setButtonNum] = useState([]);

  const handleClick1 = (num) => {
    setButtonNum((prevSelectedButtons) => {
      const index = prevSelectedButtons.indexOf(num);
      if (index !== -1) {
        return prevSelectedButtons.filter((buttonId) => buttonId !== num);
      } else {
        return [...prevSelectedButtons, num];
      }
    });
  };

  return (
    <section
      className={`relative flex flex-col gap-y-6 phone:w-full phone:min-h-[110rem] xlsm:min-h-[60rem] xlsm:w-[92%] ml-0 xlsm:ml-auto h-full mt-20 overflow-x-hidden text-left ${
        darkLight.darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className=" phone:ml-3 xlsm:ml-10 mmd:ml-0">
        <h1 className="mt-10 text-4xl font-headerFont font-semibold">Bids</h1>
        <p className="font-poppi">Welcome Bids Page</p>
      </div>
      <div
        className={`phone:ml-3 xlsm:ml-10 mmd:ml-0 phone:mr-6 xlsm:mr-16 grid gap-6 grid-cols-1 lsxm:grid-cols-2 ssm:grid-cols-3 llg:grid-cols-4 ${
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
      <div className="phone:ml-3 xlsm:ml-10 mmd:ml-0 mt-10 phone:overflow-x-scroll remo:overflow-hidden">
        <div className="flex justify-between mr-16 items-center">
          <h3 className="font-poppi text-2xl">Active Bids</h3>
          <button className="text-white phone:hidden xlsm:block bg-[#6F4FF2] px-7 py-3 rounded-xl cursor-pointer hover:bg-purple-600 transition-colors">
            Place a bid
          </button>
        </div>

        <div className=" w-full child:p-4">
          <div
            className={`grid grid-cols-7  min-w-[97rem] border-b ${
              darkLight.darkMode ? "border-slate-600" : " border-black"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <p>Item list</p>
            <p>Open Price</p>
            <p>Your Offer</p>
            <p>Recent Offer</p>
            <p>Time left</p>
            <p>Action</p>
          </div>
          <div
            className={`my-5 transition-all ${
              buttonNum.includes(1) ? "hidden" : "block"
            } grid grid-cols-7  rounded-lg min-w-[97rem]  ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <div className="flex child:object-contain">
              <img src={user1} alt="second user" />
              <div className=" flex flex-col ml-2">
                <h4 className=" text-xl">Cute Cube Cool</h4>
                <p className=" text-sm">John Abraham</p>
              </div>
            </div>
            <p>0.0029ETH</p>
            <p>0.0049ETH</p>
            <p>0.0024ETH</p>
            <p>2 Hours 1 min 30s </p>
            <img
              src={darkLight.darkMode ? close : closeBlack}
              alt="Close"
              className=" cursor-pointer"
              onClick={() => handleClick1(1)}
            />
          </div>
          <div
            className={`my-5 transition-all ${
              buttonNum.includes(2) ? "hidden" : "block"
            } grid grid-cols-7  rounded-lg min-w-[97rem]  ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <div className="flex">
              <img src={user1} alt="second user" />
              <div className=" ml-2">
                <h4 className="text-xl">The infinite</h4>
                <p className="text-sm">Eslam zaid</p>
              </div>
            </div>
            <p>0.0029ETH</p>
            <p>0.0049ETH</p>
            <p>0.0024ETH</p>
            <p>2 Hours 1 min 30s </p>
            <img
              src={darkLight.darkMode ? close : closeBlack}
              alt="Close"
              className="cursor-pointer"
              onClick={() => handleClick1(2)}
            />
          </div>
          <div
            className={`my-5 transition-all ${
              buttonNum.includes(3) ? "hidden" : "block"
            } grid grid-cols-7  rounded-lg min-w-[97rem]  ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <div className="flex">
              <img src={user3} alt="second user" />
              <div className=" ml-2">
                <h4 className="text-xl">Redosto</h4>
                <p className="text-sm">John Abraham</p>
              </div>
            </div>
            <p>0.0029ETH</p>
            <p>0.0049ETH</p>
            <p>0.0024ETH</p>
            <p>2 Hours 1 min 30s</p>
            <img
              src={darkLight.darkMode ? close : closeBlack}
              alt="Close"
              className=" cursor-pointer"
              onClick={() => handleClick1(3)}
            />
          </div>
          <div
            className={`my-5 transition-all ${
              buttonNum.includes(4) ? "hidden" : "block"
            } grid grid-cols-7  rounded-lg min-w-[97rem]  ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <div className="flex">
              <img src={user1} alt="second user" />
              <div className=" ml-2">
                <h4 className=" text-xl">NFTLord</h4>
                <p className=" text-sm">John Abraham</p>
              </div>
            </div>
            <p>0.0029ETH</p>
            <p>0.0049ETH</p>
            <p>0.0024ETH</p>
            <p>2 Hours 1 min 30s</p>
            <img
              src={darkLight.darkMode ? close : closeBlack}
              alt="Close"
              className=" cursor-pointer"
              onClick={() => handleClick1(4)}
            />
          </div>
          <div
            className={`my-5 transition-all ${
              buttonNum.includes(5) ? "hidden" : "block"
            } grid grid-cols-7  rounded-lg min-w-[97rem]  ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <div className=" flex">
              <img src={user1} alt="second user" />
              <div className=" ml-2">
                <h4 className=" text-xl">NLCM</h4>
                <p className=" text-sm">Salman Rashid</p>
              </div>
            </div>
            <p>0.0029ETH</p>
            <p>0.0049ETH</p>
            <p>0.0024ETH</p>
            <p>2 Hours 1 min 30s</p>
            <img
              src={darkLight.darkMode ? close : closeBlack}
              alt="Close"
              className=" cursor-pointer"
              onClick={() => handleClick1(5)}
            />
          </div>
          <div
            className={`my-5 transition-all ${
              buttonNum.includes(5) ? "hidden" : "block"
            } grid grid-cols-7  rounded-lg min-w-[97rem]  ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <div className=" flex">
              <img src={user2} alt="second user" />
              <div className=" ml-2">
                <h4 className=" text-xl">Cute Cube Cool</h4>
                <p className="text-sm">John Abraham</p>
              </div>
            </div>
            <p>0.0029ETH</p>
            <p>0.0049ETH</p>
            <p>0.0024ETH</p>
            <p>2 Hours 1 min 30s</p>
            <img
              src={darkLight.darkMode ? close : closeBlack}
              alt="Close"
              className=" cursor-pointer"
              onClick={() => handleClick1(5)}
            />
          </div>
          <div
            className={`my-5 transition-all ${
              buttonNum.includes(6) ? "hidden" : "block"
            } grid grid-cols-7  rounded-lg min-w-[97rem]  ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <div className="flex">
              <img src={user1} alt="second user" />
              <div className=" ml-2">
                <h4 className=" text-xl">Cute Cube Cool</h4>
                <p className="text-sm">Harry Jon</p>
              </div>
            </div>
            <p>0.0029ETH</p>
            <p>0.0049ETH</p>
            <p>0.0024ETH</p>
            <p>2 Hours 1 min 30s</p>
            <img
              src={darkLight.darkMode ? close : closeBlack}
              alt="Close"
              className=" cursor-pointer"
              onClick={() => handleClick1(6)}
            />
          </div>
          <div
            className={`my-5 transition-all ${
              buttonNum.includes(7) ? "hidden" : "block"
            } grid grid-cols-7  rounded-lg min-w-[97rem]  ${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
            } w-full items-center justify-between`}
          >
            <div>
              <span
                className={`relative inline-flex rounded-sm h-3 w-3 ${
                  darkLight.darkMode
                    ? "bg-[#C4C4C4] border border-transparent"
                    : " bg-white border border-slate-600"
                }`}
              ></span>
            </div>
            <div className=" flex">
              <img src={user2} alt="second user" />
              <div className=" ml-2">
                <h4 className="text-xl">Incredible Man</h4>
                <p className="text-sm">Osama Ahmed</p>
              </div>
            </div>
            <p>0.0029ETH</p>
            <p>0.0049ETH</p>
            <p>0.0024ETH</p>
            <p>2 Hours 1 min 30s</p>
            <img
              src={darkLight.darkMode ? close : closeBlack}
              alt="Close"
              className=" cursor-pointer"
              onClick={() => handleClick1(7)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bid;

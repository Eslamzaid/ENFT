import { useContext, useState } from "react";
import nft1Ava from "../../../assets/images/Users/Verifi2.webp";
import nft2Ava from "../../../assets/images/Users/Verifi2.webp";
import nft3Ava from "../../../assets/images/Users/ahbal.webp";
import nft4Ava from "../../../assets/images/Users/chanda.webp";
import nft5Ava from "../../../assets/images/Users/MSRT.webp";
import { DarkLightContext } from "../MarketP";

const MarketPLat = () => {
  let [buttonNum, setButtonNum] = useState([]);

  let [test, setTest] = useState(false);
  const darkLight = useContext(DarkLightContext);

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
    <div
      className={` relative flex phone:flex-col sss:flex-row mb-10 sss:gap-6 dxl:gap-x-8 items-center justify-between sss:mr-10 ${
        darkLight.darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="phone:h-full mb-10 sss:h-[40rem] ml-1 phone:w-11/12  sss:w-[38rem] llg:w-[30rem] dxl:w-5/12 text-left font-poppi">
        <h2 className=" text-3xl mb-10">Recent Activity</h2>
        <div
          className={`child:p-6 divide-[#D6DBDE] divide-opacity-40 divide-y flex flex-col ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"
          } rounded-2xl `}
        >
          <div className="flex justify-start items-center">
            <img
              className="rounded-full phone:w-10 ggg:w-fit"
              src={nft1Ava}
              alt="User #1"
            />
            <div className=" w-full flex flex-col phone:pr-5 llg:pr-5 justify-center ml-3 xlsm:ml-5">
              <h3 className="text-sm xlsm:text-md llgg:text-xl">user #999</h3>
              <p className=" text-sm text-slate-300">0.06ETH Received</p>
            </div>
            <p className=" text-right w-full text-[#68676E]">24 mins ago</p>
          </div>
          <div className="flex justify-start items-center">
            <img
              className="rounded-full phone:w-10 ggg:w-fit"
              src={nft2Ava}
              alt="User #2"
            />
            <div className=" w-full flex flex-col phone:pr-5 llg:pr-5 justify-center ml-3 xlsm:ml-5">
              <h3 className="text-sm xlsm:text-md llgg:text-xl ">user #999</h3>
              <p className="text-xs llgg:text-sm text-slate-300">
                Purchase by you for 0.05 ETH
              </p>
            </div>
            <p className=" text-right w-full text-[#68676E]">37 mins ago</p>
          </div>
          <div className="flex justify-start items-center">
            <img
              className="rounded-full phone:w-10 ggg:w-fit"
              src={nft3Ava}
              alt="User #3"
            />
            <div className=" w-full flex flex-col phone:pr-5 llg:pr-5 justify-center ml-3 xlsm:ml-5">
              <h3 className="text-sm xlsm:text-md llgg:text-xl ">user #480</h3>
              <p className="text-xs llgg:text-sm text-slate-300">
                0.06ETH Received
              </p>
            </div>
            <p className=" text-right w-full text-[#68676E]">46 mins ago</p>
          </div>
          <div className="flex justify-start items-center">
            <img
              className="rounded-full phone:w-10 ggg:w-fit"
              src={nft4Ava}
              alt="User #4"
            />
            <div className=" w-full flex flex-col phone:pr-5 llg:pr-5 justify-center ml-3 xlsm:ml-5">
              <h3 className="text-sm xlsm:text-md llgg:text-xl ">user #245</h3>
              <p className="text-xs llgg:text-sm text-slate-300">
                Purchase by you for 0.05 ETH
              </p>
            </div>
            <p className=" text-right w-full text-[#68676E]">49 mins ago</p>
          </div>
          <div className="flex justify-start items-center">
            <img
              className="rounded-full phone:w-10 ggg:w-fit"
              src={nft5Ava}
              alt="User #5"
            />
            <div className=" w-full flex flex-col phone:pr-5 llg:pr-5 justify-center ml-3 xlsm:ml-5">
              <h3 className="text-sm xlsm:text-md llgg:text-xl ">user #111</h3>
              <p className="text-xs llgg:text-sm text-slate-300">
                Started Following you
              </p>
            </div>
            <p className=" text-right w-full text-[#68676E]">57 mins ago</p>
          </div>
        </div>
      </div>
      <div className=" mb-10 font-poppi w-11/12 h-[40rem]">
        <h2 className="w-full text-left text-3xl mb-10">Top creators</h2>
        <div
          className={`h-[40rem] grid grid-cols-1 llg:grid-cols-2 gap-x-4 dxl:gap-x-6 gap-y-6 child:rounded-2xl ${
            darkLight.darkMode ? "child:bg-[#1D1932]" : "child:bg-[#FFFFFF]"
          }`}
        >
          <div className=" flex justify-star p-2 dxl:p-3">
            <img
              className="w-12 dxl:w-16"
              src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=354D73,642424,E1CC4F,1F3438,60389D"
              alt="new user"
            />
            <div className=" ml-4 flex flex-col h-20 my-auto justify-center ">
              <h3 className="text-sm sss:text-xl">user #842</h3>
              <p className=" text-sm text-slate-200">43 items</p>
            </div>
            <button
              onClick={() => handleClick1(1)}
              className={`justify-self-end ml-auto hover:outline transition-all outline-offset-2 ${
                buttonNum.includes(1)
                  ? `outline-red-400 bg-[#DC3546] ${
                      darkLight.darkMode
                        ? "hover:bg-[#c92c3c]"
                        : " hover:bg-[#d43545]"
                    } hover:text-slate-300 border-transparent`
                  : `outline-blue-700 border-[#9747FF] ${
                      darkLight.darkMode
                        ? " hover:bg-[#171329]"
                        : "hover:bg-slate-300"
                    }  `
              } border-2 text-md h-fit rounded-lg px-2 sss:px-5 py-1 my-auto cursor-pointer`}
            >
              {buttonNum.includes(1) ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className=" flex justify-start p-2 dxl:p-3">
            <img
              className="w-12 dxl:w-16"
              src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=9B111E,2D572C,FDF4E3,293133,60389D"
              alt="new user"
            />
            <div className=" ml-4 flex flex-col h-20 my-auto justify-center ">
              <h3 className="text-sm sss:text-xl">user #052</h3>
              <p className=" text-sm text-slate-200">52 items</p>
            </div>
            <button
              onClick={() => handleClick1(2)}
              className={`justify-self-end ml-auto hover:outline transition-all outline-offset-2 ${
                buttonNum.includes(2)
                  ? `outline-red-400 bg-[#DC3546] ${
                      darkLight.darkMode
                        ? "hover:bg-[#c92c3c]"
                        : " hover:bg-[#d43545]"
                    } hover:text-slate-300 border-transparent`
                  : `outline-blue-700 border-[#9747FF] ${
                      darkLight.darkMode
                        ? " hover:bg-[#171329]"
                        : "hover:bg-slate-300"
                    }  `
              } border-2 text-md h-fit rounded-lg px-2 sss:px-5 py-1 my-auto cursor-pointer`}
            >
              {buttonNum.includes(2) ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className=" flex justify-start p-2 dxl:p-3">
            <img
              className="w-12 dxl:w-16"
              src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=8A9597,922B3E,1E5945,9C9C9C,293133"
              alt="new user"
            />
            <div className=" ml-4 flex flex-col h-20 my-auto justify-center ">
              <h3 className="text-sm sss:text-xl">user #666</h3>
              <p className=" text-sm text-slate-200">19 items</p>
            </div>
            <button
              onClick={() => handleClick1(3)}
              className={`justify-self-end ml-auto hover:outline transition-all outline-offset-2 ${
                buttonNum.includes(3)
                  ? `outline-red-400 bg-[#DC3546] ${
                      darkLight.darkMode
                        ? "hover:bg-[#c92c3c]"
                        : " hover:bg-[#d43545]"
                    } hover:text-slate-300 border-transparent`
                  : `outline-blue-700 border-[#9747FF] ${
                      darkLight.darkMode
                        ? " hover:bg-[#171329]"
                        : "hover:bg-slate-300"
                    }  `
              } border-2 text-md h-fit rounded-lg px-2 sss:px-5 py-1 my-auto cursor-pointer`}
            >
              {buttonNum.includes(3) ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className=" flex justify-start p-2 dxl:p-3">
            <img
              className="w-12 dxl:w-16"
              src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=1F3A3D,AF2B1E,7FB5B5,3B3C36,4A192C"
              alt="new user"
            />
            <div className=" ml-4 flex flex-col h-20 my-auto justify-center ">
              <h3 className="text-sm sss:text-xl">user #425</h3>
              <p className=" text-sm text-slate-200">84 items</p>
            </div>
            <button
              onClick={() => handleClick1(4)}
              className={`justify-self-end ml-auto hover:outline transition-all outline-offset-2 ${
                buttonNum.includes(4)
                  ? `outline-red-400 bg-[#DC3546] ${
                      darkLight.darkMode
                        ? "hover:bg-[#c92c3c]"
                        : " hover:bg-[#d43545]"
                    } hover:text-slate-300 border-transparent`
                  : `outline-blue-700 border-[#9747FF] ${
                      darkLight.darkMode
                        ? " hover:bg-[#171329]"
                        : "hover:bg-slate-300"
                    }  `
              } border-2 text-md h-fit rounded-lg px-2 sss:px-5 py-1 my-auto cursor-pointer`}
            >
              {buttonNum.includes(4) ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className="phone:hidden  llg:flex justify-start p-2 dxl:p-3">
            <img
              className="w-12 dxl:w-16"
              src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=287233,20603D,063971,C93C20,20214F"
              alt="new user"
            />
            <div className=" ml-4 flex flex-col h-20 my-auto justify-center ">
              <h3 className="text-sm sss:text-xl">user #836</h3>
              <p className=" text-sm text-slate-200">91 items</p>
            </div>
            <button
              onClick={() => handleClick1(5)}
              className={`justify-self-end ml-auto hover:outline transition-all outline-offset-2 ${
                buttonNum.includes(5)
                  ? "outline-red-400 bg-[#DC3546] hover:bg-[#c92c3c] hover:text-slate-300 border-transparent"
                  : "outline-blue-700 border-[#9747FF] hover:bg-[#171329]"
              } outline-blue-700 border-[#9747FF] hover:bg-[#171329] border-2 text-md h-fit rounded-lg px-5 py-1 my-auto cursor-pointer`}
            >
              {buttonNum.includes(5) ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className=" phone:hidden  llg:flex justify-start p-2 dxl:p-3">
            <img
              className="w-12 dxl:w-16"
              src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=5D9B9B,8A9597,35682D,E63244,5D9B9B"
              alt="new user"
            />
            <div className=" ml-4 flex flex-col h-20 my-auto justify-center ">
              <h3 className="text-xl">user #553</h3>
              <p className=" text-sm text-slate-200">56 items</p>
            </div>
            <button
              onClick={() => handleClick1(6)}
              className={`justify-self-end ml-auto hover:outline transition-all outline-offset-2 ${
                buttonNum.includes(6)
                  ? "outline-red-400 bg-[#DC3546] hover:bg-[#c92c3c] hover:text-slate-300 border-transparent"
                  : "outline-blue-700 border-[#9747FF] hover:bg-[#171329]"
              } outline-blue-700 border-[#9747FF] hover:bg-[#171329] border-2 text-md h-fit rounded-lg px-5 py-1 my-auto cursor-pointer`}
            >
              {buttonNum.includes(6) ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className=" phone:hidden  llg:flex justify-start p-2 dxl:p-3">
            <img
              className="w-12 dxl:w-16"
              src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=969992,F44611,434B4D,1E213D,FFFFFF"
              alt="new user"
            />
            <div className=" ml-4 flex flex-col h-20 my-auto justify-center ">
              <h3 className="text-xl">user #166</h3>
              <p className=" text-sm text-slate-200">16 items</p>
            </div>
            <button
              onClick={() => handleClick1(7)}
              className={`justify-self-end ml-auto hover:outline transition-all outline-offset-2 ${
                buttonNum.includes(7)
                  ? "outline-red-400 bg-[#DC3546] hover:bg-[#c92c3c] hover:text-slate-300 border-transparent"
                  : "outline-blue-700 border-[#9747FF] hover:bg-[#171329]"
              } outline-blue-700 border-[#9747FF] hover:bg-[#171329] border-2 text-md h-fit rounded-lg px-5 py-1 my-auto cursor-pointer`}
            >
              {buttonNum.includes(7) ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className=" phone:hidden  llg:flex justify-start p-2 dxl:p-3">
            <img
              className="w-12 dxl:w-16"
              src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=308446,015D52,CC0605,EFA94A,5D9B9B"
              alt="new user"
            />
            <div className=" ml-4 flex flex-col h-20 my-auto justify-center ">
              <h3 className="text-xl">user #553</h3>
              <p className=" text-sm text-slate-200">56 items</p>
            </div>
            <button
              onClick={() => handleClick1(8)}
              className={`justify-self-end ml-auto hover:outline transition-all outline-offset-2 ${
                buttonNum.includes(8)
                  ? "outline-red-400 bg-[#DC3546] hover:bg-[#c92c3c] hover:text-slate-300 border-transparent"
                  : "outline-blue-700 border-[#9747FF] hover:bg-[#171329]"
              } outline-blue-700 border-[#9747FF] hover:bg-[#171329] border-2 text-md h-fit rounded-lg px-5 py-1 my-auto cursor-pointer`}
            >
              {buttonNum.includes(8) ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPLat;

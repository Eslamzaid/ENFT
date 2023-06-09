import { useState, useEffect, useContext } from "react";
import artData from "./artData";
import collData from "./collData";
import spaceData from "./spaceData";
import landData from "./landData";
import sportData from "./sportData";
import moreData from "./moreData";
import BgCol from "./../../../../assets/Icons/coll.webp";
import { theMainCon } from "../../LandingP";
import { useNavigate } from "react-router-dom";

const MainP2 = () => {
  const [item, setItem] = useState(artData);
  let [fatherHidden, setFather] = useState(true);
  const navigate = useNavigate();
  const currW = window.innerWidth;
  useEffect(() => {
    const wiSize = () => {
      if (window.innerWidth <= 1279 || currW <= 1279) {
        setFather(() => (fatherHidden = false));
      } else {
        setFather(() => (fatherHidden = true));
      }
    };

    window.addEventListener("resize", wiSize);
    return () => window.removeEventListener("resize", wiSize);
  });

  const filterMenu = (category) => {
    setItem(category);
  };
  const myCon = useContext(theMainCon);
  return (
    <section className=" w-10/12 text-white ">
      <button className=" phone:mb-56 xlsm:mb-72" ref={myCon.three} aria-label="ref"></button>
      <div className="text-center">
        <img
          src={BgCol}
          alt="Background Color"
          className=" hidden imd:block w-[109em] h-[63em] opacity-70 mt-56 z-[1000] absolute"
        />
        <h2 className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block font-headerFont font-semibold text-transparent bg-clip-text text-2xl esm:text-6xl">
          Top Collections
        </h2>
      </div>
      <div
        className=" z-[10000] py-5 my-7 transition-all child:transition-all child:text-xs extsm:child:text-imd child:font-semibold sms:child:text-sm  
                    llgg:child:text-xl child:mx-2 child:border-2 child:py-2 imd:child:py-4 child:rounded-full font-poppi  
                    grid grid-cols-2 gap-4 place-content-start imd:grid-cols-6 imd:grid-flow-col imd:justify-stretch"
      >
        <button
          onClick={() => filterMenu(artData)}
          className={item == artData ? " bg-[#2F80ED]" : "hover:bg-[#113a61]"}
        >
          Art
        </button>
        <button
          onClick={() => filterMenu(collData)}
          className={item == collData ? "bg-[#2F80ED]" : "hover:bg-[#113a61]"}
        >
          Collectibles
        </button>
        <button
          onClick={() => filterMenu(spaceData)}
          className={item == spaceData ? "bg-[#2F80ED]" : "hover:bg-[#113a61]"}
        >
          Space
        </button>
        <button
          onClick={() => filterMenu(landData)}
          className={item == landData ? "bg-[#2F80ED]" : "hover:bg-[#113a61]"}
        >
          Virtual Worlds
        </button>
        <button
          onClick={() => filterMenu(sportData)}
          className={item == sportData ? "bg-[#2F80ED]" : "hover:bg-[#113a61]"}
        >
          Sports
        </button>
        <button
          onClick={() => filterMenu(moreData)}
          className={item == moreData ? "bg-[#2F80ED]" : "hover:bg-[#113a61]"}
        >
          More
        </button>
      </div>
      <div>
        {fatherHidden ? (
          <div>
            <div className=" grid imd:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-5 grid-rows-1 w-full min-h-min">
              {item.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="  relative">
                      <div className=" -inset-[1px] z-30 absolute bg-gradient-to-br from-[#8b8b8b] transition-all rounded-xl"></div>
                      <div className="h-[30rem] bg-gradient-to-tl from-[#352868] flex flex-col items-center  to-[#2F2960] relative z-50 rounded-xl child:object-cover object-cover">
                        <img
                          src={item.nft}
                          alt={item.NFTalt}
                          className=" xl:w-11/12 object-cover rounded-xl h-72 my-3"
                        />
                        <h4 className=" font-poppi font-semibold xl:text-xl 2xl:text-2xl text-left w-full ml-10 mt-4 mb-2">
                          {item.OwnerName}
                        </h4>
                        <h5 className=" font-poppi font-medium text-xs 2xl:text-sm text-[#BDBBCD] text-left w-full ml-10 mb-5">
                          {item.OwnerSorName}
                        </h5>
                        <div className="  px-5 w-full flex justify-between">
                          <div>
                            <h5 className=" font-poppi font-semibold xl:text-lg 2xl:text-xl">
                              {item.FromBid}
                            </h5>
                            <p className=" font-poppi text-sm">Floor Price</p>
                          </div>
                          <div>
                            <h5 className=" font-poppi font-semibold xl:text-lg 2xl:text-xl">
                              {item.TotalBids}
                            </h5>
                            <p
                              className={` font-poppi text-right text-sm text-[${
                                item.NEG ? "#FF0000" : "#24FF00"
                              }]`}
                            >
                              {item.Profits}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              className=" ssm:hidden w-full mx-auto underline mt-10 block"
              onClick={() => setFather(() => !fatherHidden)}
            >
              {fatherHidden ? "less" : "more"}
            </button>
          </div>
        ) : (
          <div className=" grid msm:grid-cols-2 imd:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-5 grid-rows-1 w-full min-h-min">
            {item.slice(0, 6).map((item) => {
              return (
                <div key={item.id}>
                  <div className="  relative">
                    <div className=" -inset-[2px] z-30 absolute bg-gradient-to-br from-[#8b8b8b] transition-all rounded-xl"></div>
                    <div className="h-[30rem] bg-gradient-to-tl from-[#352868] flex flex-col items-center to-[#2F2960] relative z-50 rounded-xl child:object-cover object-cover">
                      <img
                        src={item.nft}
                        alt={item.NFTalt}
                        className="xlsm:w-full xl:w-11/12 object-cover rounded-xl h-72 my-3"
                      />
                      <h4 className=" font-poppi font-semibold xl:text-xl 2xl:text-2xl text-left w-full ml-10 mt-4 mb-2">
                        {item.OwnerName}
                      </h4>
                      <h5 className=" font-poppi font-medium text-xs 2xl:text-sm text-[#BDBBCD] text-left w-full ml-10 mb-5">
                        {item.OwnerSorName}
                      </h5>
                      <div className="  px-5 w-full flex justify-between">
                        <div>
                          <h5 className=" font-poppi font-semibold xl:text-lg 2xl:text-xl">
                            {item.FromBid}
                          </h5>
                          <p className=" font-poppi text-sm">Floor Price</p>
                        </div>
                        <div>
                          <h5 className=" font-poppi font-semibold xl:text-lg 2xl:text-xl">
                            {item.TotalBids}
                          </h5>
                          <p
                            className={` font-poppi text-right text-sm text-[${
                              item.NEG ? "#FF0000" : "#24FF00"
                            }]`}
                          >
                            {item.Profits}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {
              <button
                type="button"
                className=" ssm:hidden w-full underline mx-auto block m-4"
                onClick={() => setFather(() => !fatherHidden)}
              >
                {fatherHidden ? "less" : "more"}
              </button>
            }
          </div>
        )}
      </div>
      <div className="text-center w-full mt-6  mx-auto">
        <button
          type="button"
          onClick={() => navigate("/signUp")}
          className="font-poppi font-semibold transition-all ease-in-out max-w-[10rem] w-8/12 bg-transparent p-3 rounded-full sms:w-9/12 lg:w-11/12 mt-8 lg:h-14 focus:text-slate-300 border hover:ring ring-offset-[#141845] focus:ring-slate-200 ring-offset-4 mb-2"
        >
          See more
        </button>
      </div>
    </section>
  );
};
export default MainP2;

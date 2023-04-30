import { useState, useEffect, useRef } from "react";
import data from "./Data2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Anim.css";

function MainP1() {
  const [middleIndex, setMiddleIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "240px",
    afterChange: (index) => {
      setMiddleIndex(index);
    },
  };

  return (
    <div className=" bg-red-40 text-white">
      <h2 className=" text-5xl text-center max-w-[180rem] w-screen font-semibold font-headerFont mb-14 bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
        Trending NFTs
      </h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className=" relative item flex bgwhite justify-center items-center py-8"
          >
            <div
              className={
                index == middleIndex
                  ? " w-[24.2rem] h-[33.2rem] z-20 absolute left-[3.4rem] top-[1.9rem] inset-3 bg-gradient-to-br from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : " w-[24.2rem] h-[33.2rem] z-20 absolute left-[3.4rem] top-[1.9rem] inset-3 bg-gradient-to-br  from-[#8b8b8b] transition-all rounded-xl"
              }
            ></div>
            <div
              className={
                index == middleIndex
                  ? " w-[24.2rem] h-[33.2rem] z-10 absolute left-[3.4rem] top-[1.9rem] blur-md inset-3 bg-gradient-to-tl from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : " "
              }
            ></div>
            <div className=" z-30 relative  h-[33rem] flex flex-col items-center w-96 ml-14 bg-[#3B296E] rounded-xl py-3">
              <img
                className={
                  index == middleIndex
                    ? " w-[22rem] h-[17rem] object-cover rounded-xl"
                    : " w-[22rem] h-[23rem] object-cover rounded-xl"
                }
                src={item.nft}
                alt={item.NFTalt}
              />
              <div className=" w-full  px-4 p-4 flex justify-items-start items-center child:object-contain">
                <img
                  src={item.Owner}
                  alt={item.OwnerAlt}
                  className="rounded-lg"
                />
                <div className="px-6">
                  <h3
                    className={
                      index == middleIndex
                        ? " font-poppi text-2xl py-2 font-semibold text-[#6A58F1]"
                        : " font-poppi font-semibold py-2 text-2xl"
                    }
                  >
                    {item.OwnerName}
                  </h3>
                  <h6 className=" text-xs font-medium text-slate-200">
                    {item.OwnerSorName}
                  </h6>
                </div>
                <img src={item.ETH} alt={item.ETHalt} className=" ml-auto" />
              </div>
              <div className=" text-lg leading-6 font-semibold flex w-full h-fit justify-between items-center px-5 ">
                <h3 className=" font-poppi ">
                  {item.LatestBid}
                  <br />
                  <span className=" text-sm font-normal ">latest Bid</span>
                </h3>
                <div className=" font-poppi w-fit flex justify-between">
                  <h3>
                    {item.FromBid}
                    <br />
                    <span className=" text-sm font-normal ">from</span>
                  </h3>
                  <h3 className="font-poppi text-right ml-7">
                    {item.TotalBids}
                    <br />
                    <span
                      className={
                        item.NEG
                          ? "text-sm font-medium text-[#FF0000]"
                          : "text-sm font-medium text-[#24FF00]"
                      }
                    >
                      {item.Profits}
                    </span>
                  </h3>
                </div>
              </div>
              <button
                className={
                  index == middleIndex
                    ? " font-poppi font-semibold transition-all ease-in-out visible bg-[#2F80ED] rounded-full w-11/12 mt-8 h-14 hover:bg-[#287ceb] ring ring-offset-[#3B296E] focus:ring-white ring-offset-2"
                    : "transition-all ease-in-out hidden"
                }
              >
                Collect Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <button className=" font-poppi">See more</button>
      <p>The middle index is: {middleIndex}</p>
    </div>
  );
}

export default MainP1;

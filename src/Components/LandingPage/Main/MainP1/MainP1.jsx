import { useState, useEffect, useRef } from "react";
import data from "./Data2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackSha from "./../../../../assets/Icons/Ellipse 8.webp";

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
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1701,
        settings: {
          arrows: false,
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="h-[50rem] w-screen flex flex-col text-white relative top-32">
      <div className=" flex items-center justify-center w-full ">
        <h2 className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] text-transparent bg-clip-text  text-5xl  font-bold font-headerFont mb-14">
          Trending NFTs
        </h2>
      </div>

      <div className=" w-72 llgg:block hidden backdrop-blur-sm h-full -left-12 absolute z-[60]"></div>
      <div className=" w-72 llgg:block hidden backdrop-blur-sm h-full -right-12 absolute z-[60]"></div>
      <div></div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className=" relative item flex bgwhite justify-center items-center py-8"
          >
            <div
              className={
                index == middleIndex
                  ? " w-[24.2rem] h-[33.2rem] z-30 absolute left-[3.4rem] top-[1.9rem] inset-3 bg-gradient-to-br from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : " w-[24.2rem] h-[33.2rem] z-30 absolute left-[3.4rem] top-[1.9rem] inset-3 bg-gradient-to-br  from-[#8b8b8b] transition-all rounded-xl"
              }
            ></div>
            <div
              className={
                index == middleIndex
                  ? " w-[24.2rem] h-[33.2rem] z-20 absolute left-[3.4rem] top-[1.9rem] blur-md inset-3 bg-gradient-to-tl from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : " "
              }
            ></div>
            <div
              style={{ backgroundImage: `url('${BackSha}')` }}
              className=" bg-no-repeat  bg-center bg-cover w-[80rem] top-32 absolute z-10 h-3/4 blur-xl opacity-30"
            ></div>
            <div className=" z-40 relative  h-[33rem] flex flex-col items-center w-96 ml-14 bg-[#262951] rounded-xl py-3">
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
                    ? " font-poppi font-semibold transition-all ease-in-out visible bg-[#2F80ED] rounded-full w-11/12 mt-8 h-14 focus:bg-[#1869d3] ring ring-offset-[#3B296E] focus:ring-white ring-offset-2"
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
    </div>
  );
}

export default MainP1;

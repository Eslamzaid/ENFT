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
    autoplay: false,
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
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          centerPadding: "220px",
        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 1,
          centerPadding: "390px",
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 925,
        settings: {
          slidesToShow: 2,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerPadding: "1px",
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
      <div className=" flex items-center justify-center w-full xl:bg-red-300 ">
        <h2 className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] text-transparent bg-clip-text text-3xl  esm:text-5xl  font-bold font-headerFont esm:mb-12">
          Trending NFTs
        </h2>
      </div>

      <div className="llgg:block hidden backdrop-blur-sm h-full -left-12 absolute z-[60]"></div>
      <div className="llgg:block hidden backdrop-blur-sm h-full -right-12 absolute z-[60]"></div>
      <div></div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className=" relative flex justify-center items-center py-8 "
          >
            <div
              className={
                index == middleIndex
                  ? " w-[16.6rem] right-0 h-[33.2rem] z-30 absolute top-[1.9rem] inset-6 bg-gradient-to-br from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : " w-[16.6rem] h-[33.2rem] z-30 absolute top-[1.9rem] inset-3 bg-gradient-to-br  from-[#8b8b8b] transition-all rounded-xl"
              }
            ></div>
            <div
              className={
                index == middleIndex
                  ? " w-[16.6rem] h-[33.2rem] z-20 absolute top-[1.9rem] blur-sm inset-3 bg-gradient-to-tl from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : " "
              }
            ></div>
            <div
              style={{ backgroundImage: `url('${BackSha}')` }}
              className=" bg-no-repeat  bg-center bg-cover w-[80rem] top-32 absolute z-10 h-3/4 blur-xl opacity-30"
            ></div>
            <div className=" relative flex justify-center items-center">
              <div className=" z-40 relative h-[33rem] flex flex-col items-center w-64 esm:w-8/12 sms:w-[19.8rem] lg:w-96 bg-[#262951] rounded-xl py-3">
                <img
                  className={
                    index == middleIndex
                      ? " sms:w-[18rem] llg:w-[22rem] h-[17rem] object-cover rounded-xl"
                      : " sms:w-[18rem] llg:w-[22rem] h-[23rem] object-cover rounded-xl"
                  }
                  src={item.nft}
                  alt={item.NFTalt}
                />
                <div className=" w-full px-4 p-4 flex justify-items-start items-center child:object-contain">
                  <img
                    src={item.Owner}
                    alt={item.OwnerAlt}
                    className="rounded-lg"
                  />
                  <div className="px-6">
                    <h3
                      className={
                        index == middleIndex
                          ? " font-poppi sms:text-xl lg:text-2xl py-2 font-semibold text-[#6A58F1]"
                          : " font-poppi font-semibold py-2 sms:text-xl lg:text-2xl"
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
                <div className=" lg:text-lg leading-6 font-semibold flex w-full h-fit justify-between items-center px-5 ">
                  <h3 className=" font-poppi ">
                    {item.LatestBid}
                    <br />
                    <span className=" sms:text-xs lg:text-sm font-normal ">
                      latest Bid
                    </span>
                  </h3>
                  <div className=" font-poppi w-fit flex justify-between">
                    <h3>
                      {item.FromBid}
                      <br />
                      <span className="sms:text-xs lg:text-sm font-normal ">
                        from
                      </span>
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
                      ? " font-poppi font-semibold transition-all ease-in-out visible bg-[#2F80ED] rounded-full sms:w-9/12 lg:w-11/12 mt-8 sms:h-12 lg:h-14 focus:bg-[#1869d3] ring ring-offset-[#3B296E] focus:ring-white ring-offset-2"
                      : "transition-all ease-in-out hidden"
                  }
                >
                  Collect Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button className=" font-poppi">See more</button>
    </div>
  );
}

export default MainP1;

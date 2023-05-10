import { useState, useContext } from "react";
import { theMainCon } from "../../LandingP";
import data from "./Data2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackSha from "./../../../../assets/Icons/Ellipse 8.webp";
import { useNavigate } from "react-router-dom";

function MainP1() {
  const [middleIndex, setMiddleIndex] = useState(0);
  const myContext = useContext(theMainCon);
  const navigate = useNavigate();
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
          slidesToShow: 2,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className=" flex flex-col text-white  ">
      <button ref={myContext.one} className="mb-28" aria-label="ref"></button>
      <div className="  flex items-center justify-center  ">
        <h2 className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] text-transparent bg-clip-text text-2xl  esm:text-5xl  font-bold font-headerFont esm:mb-12">
          Trending NFTs
        </h2>
      </div>
      <div className=" relative">
        <div className="remo:block baseM:hidden  hidden w-[20.1rem] h-[44rem] backdrop-blur-sm  -left-12 absolute z-[60]"></div>
        <div className="llgg:block hidden w-[20.1rem] h-[44rem] backdrop-blur-sm  -right-12 absolute z-[60]"></div>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className=" relative flex justify-center items-center py-8"
          >
            <div
              className={
                index == middleIndex
                  ? "w-[92.6%] exsm:w-[76%] esm:w-[63.9%] msm:w-[84%] sms:w-[89%] imd:w-[83.8%] lg:w-[83.8%] exsm:left-[12%] esm:left-[18%] msm:left-[8%] sms:left-[5.5%] imd:left-[8%] lg:left-[8%] inset-3 h-[34.3rem] z-30 absolute top-[1.8rem]  bg-gradient-to-br from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : "w-[92.6%] exsm:w-[76%] esm:w-[63.9%] msm:w-[84%] sms:w-[89%] imd:w-[83.8%] lg:w-[83.8%] exsm:left-[12%] esm:left-[18%] msm:left-[8%] sms:left-[5.5%] imd:left-[8%] lg:left-[8%] inset-3 h-[34.3rem] z-30 absolute top-[1.8rem]  bg-gradient-to-br from-[#8b8b8b] transition-all rounded-xl"
              }
            ></div>
            <div
              className={
                index == middleIndex
                  ? "w-[92.6%] exsm:w-[76%] esm:w-[63.9%] msm:w-[84%] sms:w-[89%] imd:w-[83.8%] lg:w-[83.8%] exsm:left-[12%] esm:left-[18%] msm:left-[8%] sms:left-[5.5%] imd:left-[8%] lg:left-[8%] inset-3 h-[34.5rem] z-20 absolute top-[1.8rem] blur-sm  bg-gradient-to-tl from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : ""
              }
            ></div>
            <div
              style={{ backgroundImage: `url('${BackSha}')` }}
              className=" bg-no-repeat  bg-center bg-cover w-[80rem] top-32 absolute z-10 h-3/4 blur-xl opacity-30"
            ></div>
            <div className="relative flex justify-center items-center">
              <div className="w-[90%] exsm:w-9/12 esm:w-[62%] msm:w-[83%] sms:w-[88%] imd:w-[83%]  z-40 relative h-[34rem] flex flex-col items-center bg-[#262951] rounded-xl py-3">
                <img
                  className={
                    index == middleIndex
                      ? "h-[17rem] object-cover rounded-xl w-[90%]"
                      : "h-[23rem] object-cover rounded-xl px-4"
                  }
                  src={item.nft}
                  alt={item.NFTalt}
                />
                <div className=" px-4 p-4 flex justify-items-start items-center child:object-contain">
                  <img
                    src={item.Owner}
                    alt={item.OwnerAlt}
                    className="rounded-lg"
                  />
                  <div className="px-6">
                    <h3
                      className={
                        index == middleIndex
                          ? "font-poppi sms:text-xl lg:text-2xl py-2 font-semibold text-[#6A58F1]"
                          : "font-poppi font-semibold py-2 sms:text-xl lg:text-2xl"
                      }
                    >
                      {item.OwnerName}
                    </h3>
                    <h6 className="text-xs font-medium text-slate-200">
                      {item.OwnerSorName}
                    </h6>
                  </div>
                  <img src={item.ETH} alt={item.ETHalt} className="ml-auto" />
                </div>
                <div className="esm:text-sm lg:text-lg leading-6 font-semibold flex w-full h-fit justify-between items-center px-5">
                  <h3 className="font-poppi">
                    {item.LatestBid}
                    <br />
                    <span className="sms:text-xs lg:text-sm font-normal">
                      latest Bid
                    </span>
                  </h3>
                  <div className="font-poppi w-fit flex justify-between">
                    <h3>
                      {item.FromBid}
                      <br />
                      <span className="sms:text-xs lg:text-sm font-normal">
                        from
                      </span>
                    </h3>
                    <h3 className="font-poppi text-right esm:ml-2 ml-7">
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
                      ? "font-poppi font-semibold transition-all ease-in-out visible bg-[#2F80ED] p-4 rounded-full sms:w-9/12 lg:w-11/12 mt-8 sms:h-12 lg:h-14 focus:bg-[#1869d3] hover:ring ring-offset-[#3B296E] focus:ring-white ring-offset-2"
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
      <div className=" flex justify-center ">
        <button
          onClick={() => navigate("/signUp")}
          className="font-poppi font-semibold transition-all ease-in-out max-w-[10rem] w-8/12 bg-transparent p-4 rounded-full sms:w-9/12 lg:w-11/12 mt-8 sms:h-12 lg:h-14 focus:text-slate-300 border hover:ring ring-offset-[#141845] focus:ring-slate-200 ring-offset-4 mb-2"
        >
          See more
        </button>
      </div>
    </div>
  );
}

export default MainP1;

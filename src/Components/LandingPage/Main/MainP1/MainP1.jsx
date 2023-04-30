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
    <div className=" my-36 text-white">
      <h2 className=" text-5xl text-center max-w-[180rem] w-screen font-semibold font-headerFont mb-14 bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
        Trending NFTs
      </h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className=" relative item flex bgwhite justify-center items-center py-5"
          >
            <div
              className={
                index == middleIndex
                  ? " w-[24.2rem] h-[35.2rem] z-20 absolute left-[3.4rem] top-[1.1rem] inset-3 bg-gradient-to-tl blur-s from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : " transition-all "
              }
            ></div>
            <div
              className={
                index == middleIndex
                  ? " w-[24.2rem] h-[35.2rem] z-10 absolute left-[3.4rem] top-[1.1rem] blur-sm inset-3 bg-gradient-to-tl blur-s from-[#69EACB] via-[#EACCF8] to-[#6654F1] transition-all rounded-xl"
                  : " transition-all "
              }
            ></div>
            <div className=" z-30 relative  h-[35rem] flex flex-col items-center w-96 ml-14 bg-[#3B296E] rounded-xl py-3">
              <img
                className=" w-[22rem] h-[23rem] object-cover rounded-xl"
                src={item.nft}
                alt={item.NFTalt}
              />
              <div className=" w-full bg-red-400 px-4 p-4 flex justify-items-start items-center child:object-contain">
                <img src={item.Owner} alt={item.OwnerAlt} className="rounded-lg"/>
                <div>
                  <h3>{item.OwnerName}</h3>
                  <h6>{item.OwnerSorName}</h6>
                </div>
                <img src={item.ETH} alt={item.ETHalt} className=" ml-auto"/>
              </div>
              <div></div>
              <button
                className={
                  index == middleIndex
                    ? " transition-all ease-in-out visible"
                    : " transition-all ease-in-out hidden"
                }
              >
                Hello
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <p>The middle index is: {middleIndex}</p>
    </div>
  );
}

export default MainP1;

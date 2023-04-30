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
    centerPadding: "100px",
    afterChange: (index) => {
      setMiddleIndex(index);
    },
  };

  return (
    <div className=" my-36">
      <h2 className=" text-5xl text-center max-w-[180rem] w-screen font-semibold font-headerFont mb-14 bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
        Trending NFTs
      </h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className=" relative border-8 item flex justify-center"
          >
            <div
              className={
                index == middleIndex
                  ? " w-[20rem] h-[20rem] absolute left-[22%] -inset-1 bg-green-400"
                  : ""
              }
            ></div>
            <div className=" relative flex flex-col items-center">
              <img
                className=" w-[20rem] h-[20rem] object-cover"
                src={item.nft}
                alt={item.NFTalt}
              />
              <h2>{item.OwnerName}</h2>
              <p>ID: {item.id}</p>
            </div>
          </div>
        ))}
      </Slider>
      <p>The middle index is: {middleIndex}</p>
    </div>
  );
}

export default MainP1;

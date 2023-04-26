import React, { useState, useEffect } from "react";
import data from "./data";
import Vec1 from "./../../../../assets/Icons/Vector6.png";
import Vec2 from "./../../../../assets/Icons/Vector5.png";

let ran = Math.floor(Math.random() * 50);
const Nbody2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let [hours, setHours] = useState(ran);
  let [min, setMin] = useState(59);
  let [sec, setSec] = useState(59);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let tSec = setInterval(() => {
      if (min > 0) {
        if (sec > 0) {
          setSec((prevTime) => prevTime - 1);
        }
      } else {
        clearInterval(tSec);
      }
    }, 1000);
    let tMin = setInterval(() => {
      if (min > 0) {
        if (sec == 0) {
          setMin((prevTime) => prevTime - 1);
          setSec(() => (sec = 59));
        }
      }
    }, 1000);
    let tHours = setInterval(() => {
      if (hours > 0) {
        if (min == 0) {
          if (sec == 0) {
            setHours((prevTime) => prevTime - 1);
            setMin(() => (min = 59));
            setSec(() => (sec = 59));
          }
        }
      } else {
        setHours(() => (hours = ran));
        setMin(() => (min = 59));
        setSec(() => (sec = 59));
      }
    }, 1000);
    return () => {
      clearInterval(tSec);
      clearInterval(tMin);
      clearInterval(tHours);
    };
  });
  return (
    <div>
      <div className="bg-left w-full z-10 relative bg-red-300">
        <div
          className=" z-20 absolute ring-1 rounded-xl
                       ring-slate-400 -skew-x-[8deg] h-60 backdrop-blur-md
                         md:w-60 md:-left-7 md:-bottom-[15.2rem]
                         lg:w-64  lg:left-[9rem] lg:-bottom-[15.2rem]
                         llg:left-[16rem] llg:w-[18.4rem]
                         xl:left-[10rem]  xl:w-[21rem] xl:-bottom-[15rem]
                         2xl:left-[9rem] 2xl:w-[27rem] 2xl:-bottom-[14rem]"
        ></div>
        <div
          className=" z-20 absolute top-10 ring-1 
                      rounded-xl ring-slate-400 -skew-x-[8deg] backdrop-blur-2xl
                      md:w-72 md:left-0 md:h-[23rem]
                      lg:left-44 lg:h-[28rem]
                      llg:left-[19.5rem] llg:h-[26.7rem]
                      xl:h-[30em] xl:left-48 xl:w-[22.6rem]
                      2xl:w-[28.5rem]"
        ></div>
        <div
          className=" z-40 child:-skew-x-3 -skew-x-[8deg] -bottom-[4rem] backdrop-blur-xl
                      absolute font-semibold rounded-2xl h-fit border border-slate-400 pb-1
                      flex flex-nowrap flex-col
                      md:px-3 md:left-52 md:w-fit 
                      lg:left-[24rem] lg:w-[7.3rem]
                      llg:left-[32rem] llg:px-5 llg:w-32 
                      xl:left-[29rem] xl:px-3 xl:py-1 xl:w-32
                      2xl:left-[33rem] 2xl:w-40 2xl:py-2 2xl:px-7
                         "
        >
          <h2 className=" md:text-base md:font-bold xl:text-xl lg:text-base lg:font-black">
            BID NOW!
          </h2>
          <p className=" text-[0.7rem] font-[500] ">Latest collection</p>
        </div>
        <div
          className=" absolute z-10 
                      md:-left-3 md:top-7
                      lg:left-36 lg:top-8
                      llg:left-64 llg:top-8
                      xl:left-40 xl:top-8
                      2xl:left-40 2xl:top-4 w-fit"
        >
          {data.map((item, index) => (
            <>
              {index === currentIndex && (
                <div className="">
                  <img
                    key={item.id}
                    src={item.nft}
                    className={
                      index === currentIndex
                        ? item.id == 1
                          ? " animate-waving-hand object-contain md:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]"
                          : " animate-waving-hand object-contain md:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]  "
                        : ""
                    }
                  />
                  <div>
                    <div>
                      <h3>{item.CurrentPrice}</h3>
                      <p>Latest Bid</p>
                    </div>
                    <div><h3>{item.TotalPrice}</h3>
                      <p>Latest Bid</p></div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        <div
          className=" absolute z-30 
                      md:-left-3 md:top-7
                      lg:left-36 lg:top-8
                      llg:left-64 llg:top-8
                      xl:left-40 xl:top-8
                      2xl:left-40 2xl:top-4 w-fit"
        >
          {data.map((item, index) => (
            <>
              {index === currentIndex && (
                <div className="">
                  <img
                    key={item.id}
                    src={item.nft}
                    className={
                      index === currentIndex
                        ? item.id == 1
                          ? " animate-waving-hand object-contain md:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]"
                          : " animate-waving-hand object-contain md:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]  "
                        : ""
                    }
                  />
                </div>
              )}
            </>
          ))}
        </div>
        <div
          className=" z-20 ring-1 ring-slate-400 backdrop-blur-2xl -skew-x-[8deg] absolute w-fit h-16 
                      font-headerFont rounded-xl
                      md:p-2 md:-left-[2.7rem]  md:pb-4 md:pr-4 md:text-sm md:top-[23rem]
                      lg:p-3 lg:pb-6 lg:pr-7 lg:left-[7.8rem] lg:top-[28rem]
                      llg:left-[16rem] llg:top-[27.6rem]
                      xl:top-[29.2rem] xl:p-4 xl:pb-14 xl:pr-5 xl:left-[7.5rem] xl:text-base
                      2xl:left-[8rem]"
        >
          <h3> Auction</h3>

          <br />
          <span className=" text-xs relative bottom-4">End In</span>
        </div>
        <div className=" z-30 relative w-full h-full ">
          <img
            src={Vec1}
            alt="liner gradient color"
            className=" z-40 absolute 
                        md:-left-64 md:-bottom-[30rem]
                        lg:-left-40 lg:-bottom-[45rem]
                        llg:-left-24
                        xl:-left-44 
                        2xl:-left-52 2xl:-bottom-[42rem]"
          />
          <img
            src={Vec2}
            alt="liner gradient color"
            className=" bg-right absolute -bottom-[48rem] -right-20
                        md:left-24 md:-bottom-[38rem] lg:-bottom-[46rem] lg:left-44 llg:left-72 
                        xl:-bottom-[52rem]
                        "
          />
          <div
            className=" absolute font-headerFont backdrop-blur-lg outline-slate-500 outline outline-1 
            flex flex-nowrap items-center
                           rounded-xl -skew-x-[8deg]
                           md:top-[23.8rem] md:left-[3rem]
                           lg:top-[29.5rem] md:p-2 lg:left-[15rem]
                           llg:top-[28.7rem] llg:p-3 llg:left-[22.5rem]
                           xl:p-3 xl:top-[31rem] xl:left-[14rem] 
                           2xl:left-[15.3rem] 2xl:p-5
                           "
          >
            <h2 className=" inline-block text-center md:px-2 xl:px-4 ">
              <span className="md:text-2xl xl:text-3xl 2xl:text-4xl md:font-semibold">
                {hours}
              </span>
              <br />
              Hours
            </h2>
            <span
              className="  md:text-2xl xl:text-4xl 
                              xl:px-1 2xl:px-3"
            >
              :
            </span>

            <h2 className=" inline-block text-center md:px-2  xl:px-4">
              <span className="md:text-2xl xl:text-3xl 2xl:text-4xl md:font-semibold">
                {min}
              </span>
              <br />
              Minutes
            </h2>
            <span className=" md:text-2xl xl:text-3xl 2xl:text-4xl xl:px-1 2xl:px-3">
              :
            </span>
            <h2 className=" inline-block text-center md:px-2 xl:px-4">
              <span className="md:text-2xl xl:text-3xl 2xl:text-4xl md:font-semibold">
                {sec}
              </span>
              <br />
              Seconds
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nbody2;

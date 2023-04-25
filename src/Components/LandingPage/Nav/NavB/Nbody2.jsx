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
      <div className="bg-left w-[45rem] z-10 relative">
        <div
          className=" z-20 absolute ring-1 -bottom-[13rem] rounded-xl
                       ring-slate-400 -skew-x-[8deg] h-60 backdrop-blur-md
                         md:w-60 md:-left-7 md:-bottom-[13.5rem]
                         lg:w-64  lg:left-[9rem] 
                         llg:left-[16rem]
                         xl:left-[9rem]  xl:w-80 "
        ></div>
        <div
          className=" z-20 absolute top-10 ring-1 
                         rounded-xl ring-slate-400 -skew-x-[8deg] backdrop-blur-2xl
                         md:w-72 md:left-0 md:h-[25rem] 
                         lg:left-44 lg:h-[28rem]
                         llg:left-[19.5rem] llg:h-[30rem]
                         xl:h-[28em] xl:left-44 xl:w-[22rem]"
        ></div>
        <div className=" absolute z-30 xl:left-32">
          {data.map((item, index) => (
            <>
              {index === currentIndex && (
                <div className="">
                  <img
                    key={item.id}
                    src={item.nft}
                    className={
                      index === currentIndex
                        ? " animate-waving-hand h-[30rem] w-[23rem] object-contain -skew-x-6 "
                        : " "
                    }
                  />
                </div>
              )}
            </>
          ))}
        </div>
        <div
          className=" absolute z-10 
                         xl:left-[14rem] xl:top-3"
        >
          {data.map((item, index) => (
            <>
              {index === currentIndex && (
                <>
                  <img
                    alt={item.alt}
                    key={item.id}
                    src={item.nft}
                    className={
                      index === currentIndex
                        ? " animate-waving-hand h-[25rem] w-[17rem] "
                        : " "
                    }
                  />
                </>
              )}
            </>
          ))}
        </div>
        <div
          className=" z-20 ring-1 ring-slate-400 backdrop-blur-2xl -skew-x-[8deg] absolute w-fit h-16 
                      font-headerFont rounded-xl
                      md:p-2 md:-left-[2.7rem]  md:pb-4 md:pr-4 md:text-sm md:top-[26rem]
                      lg:p-3 lg:pb-6 lg:pr-7 lg:left-[7.8rem] lg:top-[28rem]
                      llg:left-[16rem] llg:top-[30rem]
                      xl:top-[28.2rem] xl:p-4 xl:pb-14 xl:pr-5 xl:left-[7.5rem] xl:text-base"
        >
          Auction
          <br />
          <span className=" text-xs relative bottom-2">End In</span>
        </div>
        <div
          className=" z-40 child:-skew-x-3 -skew-x-[8deg] -bottom-[3rem] backdrop-blur-2xl
                      absolute font-semibold rounded-2xl h-fit border border-slate-400 pb-1
                      md:px-4 md:left-52 md:w-fit 
                      lg:left-[24rem]
                      llg:left-[32rem] llg:px-5
                      xl:px-7 xl:left-[26rem] 
                         "
        >
          <h2 className=" xl:text-lg lg:text-base lg:font-semibold xl:font-black md:text-base">
            BID NOW!
          </h2>
          <p className=" text-xs ">Latest collection</p>
        </div>
        <div className=" z-30 relative w-full h-full ">
          <img
            src={Vec1}
            alt="liner gradient color"
            className=" z-40 absolute h-[35rem] -bottom-[34rem] 
                        md:-left-36 lg:left-0 llg:left-12"
          />
          <img
            src={Vec2}
            alt="liner gradient color"
            className=" bg-right absolute -right-20
                        md:-left-4 lg:left-44 llg:left-56"
          />
          <div
            className=" absolute font-headerFont backdrop-blur-2xl outline-slate-500 outline outline-1 
                           rounded-xl -skew-x-[8deg]
                           md:top-[27.5rem] md:left-[3rem]
                           lg:top-[29.5rem] md:p-2 lg:left-[15rem]
                           llg:top-[31rem] llg:p-3 llg:left-[23rem]
                           xl:p-5 xl:top-[30rem] xl:left-[15rem]"
          >
            <h2 className=" inline-block text-center md:px-2 xl:px-4 ">
              <span className="md:text-2xl xl:text-4xl md:font-semibold">
                {hours}
              </span>
              <br />
              Hours
            </h2>
            <span className=" relative bottom-3 md:text-2xl xl:text-4xl">
              :
            </span>

            <h2 className=" inline-block text-center md:px-2  xl:px-4">
              <span className="md:text-2xl xl:text-4xl md:font-semibold">
                {min}
              </span>
              <br />
              Minutes
            </h2>
            <span className=" relative bottom-3 md:text-2xl xl:text-4xl">
              :
            </span>
            <h2 className=" inline-block text-center md:px-2 xl:px-4">
              <span className="md:text-2xl xl:text-4xl md:font-semibold">
                {sec}
              </span>
              <br />
              Seconds
            </h2>
          </div>
        </div>
      </div>
      {/* <table className=" z-50 relative">
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={index === currentIndex ? " animate-waving-hand" : " "}
            >
              {index === currentIndex && (
                <>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.nft} alt={item.imgName} />
                  </td>
                  <td>{item.TotalPrice}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Nbody2;

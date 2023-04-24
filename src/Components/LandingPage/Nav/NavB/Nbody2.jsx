import React, { useState, useEffect } from "react";
import data from "./data";
import Vec1 from "./../../../../assets/Icons/Vector6.png";
import Vec2 from "./../../../../assets/Icons/Vector5.png";
import Vec23 from "./../../../../assets/images/Images/Articel1.png";

const Nbody2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="bg-left w-[45rem] relative">
        <div
          className=" z-20 absolute border -bottom-[13rem] rounded-xl
                       border-slate-400 -skew-x-6 h-60 backdrop-blur-md
                         md:w-60 md:-left-7 md:-bottom-[13.5rem]
                         lg:w-64  lg:left-[9rem] 
                         llg:left-[16rem]
                         xl:left-[9rem]  xl:w-80 "
        ></div>
        <div
          className=" z-20 absolute top-10 border 
                         rounded-xl border-slate-400 -skew-x-6 backdrop-blur-3xl
                         md:w-72 md:left-0 md:h-[25rem] 
                         lg:left-44 lg:h-[28rem]
                         llg:left-[19.5rem] llg:h-[30rem]
                         xl:h-[35em] xl:left-44 xl:w-[22rem]"
        ></div>
        <div
          className=" z-20 border backdrop-blur-md -skew-x-6 absolute w-fit h-16 
                      font-headerFont rounded-xl
                      md:p-2 md:-left-[2.7rem]  md:pb-4 md:pr-4 md:text-sm md:top-[26rem]
                      lg:p-3 lg:pb-6 lg:pr-7 lg:left-[7.8rem]
                      llg:left-[16.5rem]
                      xl:top-[35.3rem] xl:p-2 xl:pb-6 xl:pr-5 xl:left-[9rem] xl:text-base"
        >
          Auction
          <br />
          End In
        </div>
        <div
          className=" z-20 child:-skew-x-3 -skew-x-3 -bottom-[3rem] backdrop-blur-md
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
        </div>
      </div>
      {/* <table>
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

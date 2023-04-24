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
          className=" z-20 absolute xl:w-80 border lg:left-52 -bottom-52 rounded-xl
                       border-slate-400 -skew-x-6 h-60 backdrop-blur-md
                         md:w-40 md:left-0 lg:w-72 "
        ></div>
        <div
          className=" z-20 absolute xl:w-96 lg:h-[35em] lg:left-52 top-10 border 
                         rounded-xl border-slate-400 -skew-x-6 backdrop-blur-3xl
                         md:w-72 md:left-0 md:h-[25rem] lg:w-80 "
        ></div>
        <div
          className=" z-20 border backdrop-blur-md -skew-x-6 absolute w-fit
                      h-16 lg:top-[35.3rem] lg:p-2 lg:pb-6 lg:pr-5 lg:left-[10.5rem] lg:text-base
                      font-light font-headerFont rounded-xl
                      md:p1 md:-left-[3rem]  md:pb-4 md:text-sm md:top-[30rem]"
        >
          Auction
          <br />
          End In
        </div>
        <div
          className=" z-20 child:-skew-x-3 -skew-x-3 -bottom-12 backdrop-blur-md 
                         absolute font-semibold lg:px-8 rounded-2xl h-fit lg:left-[29.5rem] border
                       border-slate-400 md:px-6 md:left-52 md:w-fit  "
        >
          <h2 className=" text-lg">BID NOW!</h2>
          <p className=" text-xs">
            Latest
            <br /> collections
          </p>
        </div>
        <div className=" z-30 relative w-full h-full ">
          <img
            src={Vec1}
            alt="liner gradient color"
            className=" z-40 absolute h-[35rem] -bottom-[34rem]"
          />
          <img
            src={Vec2}
            alt="liner gradient color"
            className=" bg-right absolute -right-20"
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

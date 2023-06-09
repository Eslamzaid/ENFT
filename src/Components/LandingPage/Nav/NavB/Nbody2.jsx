import { useState, useEffect, useContext } from "react";
import data from "./data";
import Vec1 from "./../../../../assets/Icons/Vector6.webp";
import Vec2 from "./../../../../assets/Icons/Vector5.webp";
import { theMainCon } from "./../../LandingP";

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
    <div className="bg-left w-full z-10 relative mt-10">
      <div className=" z-20 absolute ring-1 rounded-xl ring-slate-400 -skew-x-[8deg] h-60 backdrop-blur-md imd:w-[17.4rem] imd:-left-9 imd:-bottom-[15.2rem] lg:w-72  lg:left-[8rem] lg:-bottom-[15.2rem] llg:left-[16rem] llg:w-[18.4rem] xl:left-[10rem]  xl:w-[21rem] xl:-bottom-[15rem] 2xl:left-[9rem] 2xl:w-[27rem] 2xl:-bottom-[14rem]"></div>
      <div
        className=" z-20 absolute top-10 ring-1 
                      rounded-xl ring-slate-400 -skew-x-[8deg] backdrop-blur-2xl
                      imd:w-72 imd:left-0 imd:h-[23rem]
                      lg:left-44 lg:h-[28rem]
                      llg:left-[19.5rem] llg:h-[26.7rem]
                      xl:h-[30em] xl:left-48 xl:w-[22.6rem]
                      2xl:w-[28.5rem]"
      ></div>
      <div
        className=" z-40 child:-skew-x-3 -skew-x-[8deg] -bottom-[4rem] backdrop-blur-xl
                      absolute font-semibold rounded-2xl h-fit border border-slate-400 pb-1
                      flex flex-nowrap flex-col
                      imd:px-3 imd:left-52 imd:w-fit 
                      lg:left-[24rem] lg:w-[7.3rem]
                      llg:left-[32rem] llg:px-5 llg:w-32 
                      xl:left-[29rem] xl:px-3 xl:py-1 xl:w-32
                      2xl:left-[33rem] 2xl:w-40 2xl:py-2 2xl:px-7
                         "
      >
        <h2 className=" text-sm md:text-md imd:text-base imd:font-bold xl:text-xl lg:text-base lg:font-black">
          Bid now!
        </h2>
        <p className=" text-[0.7rem] font-[500] ">Latest collection</p>
      </div>{" "}
      <div className=" absolute z-10  imd:-left-3 imd:top-7 lg:left-36 lg:top-8 llg:left-64 llg:top-8 xl:left-40 xl:top-8 2xl:left-40 2xl:top-4 w-fit">
        {data.map((item, index) => (
          <div key={index}>
            {index === currentIndex && (
              <div>
                <img
                  alt={`Nft ${index}`}
                  key={index}
                  src={item.nft}
                  className={
                    index === currentIndex
                      ? item.id == 0
                        ? " animate-waving-hand object-contain imd:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]"
                        : " animate-waving-hand object-contain imd:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]  "
                      : ""
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className=" absolute z-30 imd:-left-3 imd:top-7 lg:left-36 lg:top-8 llg:left-64 llg:top-8 xl:left-40 xl:top-8 2xl:left-40 2xl:top-4 w-fit">
        {data.map((item, index) => (
          <div key={index}>
            {index === currentIndex && (
              <div key={index}>
                <img
                  key={item.id}
                  src={item.nft}
                  alt={`NFT ${index}`}
                  className={
                    index === currentIndex
                      ? item.id == 1
                        ? " animate-waving-hand object-contain imd:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]"
                        : " animate-waving-hand object-contain imd:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]  "
                      : ""
                  }
                />
                <div
                  className=" absolute backdrop-blur-xl rounded-xl -skew-x-[8deg] font-headerFont flex justify-between ring-1 ring-slate-400 z-10 imd:p-3 imd:w-52 imd:h-16 imd:-left-16 imd:top-[14rem] lg:p-3 lg:w-56 lg:h-16 lg:-left-16 lg:top-[18rem] llg:p-3 llg:w-56 llg:h-16 llg:-left-16 llg:top-[18rem] xl:p-4 xl:gap-x-12 xl:w-64 xl:h-20 xl:-left-16 xl:top-[20rem] 2xl:p-5 2xl:gax-x-16 2xl:w-[18.2rem] 2xl:h-20 2xl:-left-20 2xl:top-[22rem]  "
                  key={item.id + 1}
                >
                  <div
                    className=" relative imd:bottom-1  bottom-2"
                    key={item.id + 2}
                  >
                    <h3
                      className="imd:font-semibold  lg:text-base 2xl:text-xl 2xl:font-[600]"
                      key={item.id}
                    >
                      {item.CurrentPrice}
                    </h3>
                    <p className="text-sm">Latest Bid</p>
                  </div>
                  <div
                    className=" relative imd:bottom-2 bottom-3 text-right"
                    key={item.id + 5}
                  >
                    <h3 className=" 2xl:text-lg font-medium" key={item.id + 6}>
                      {item.TotalPrice}
                    </h3>
                    <p
                      className={
                        item.id == 3
                          ? "text-red-500 font-medium"
                          : "text-[#24FF00] font-medium"
                      }
                      key={item.id + 7}
                    >
                      {item.Profits}
                    </p>
                  </div>
                </div>
                <div
                  key={index + 8}
                  className=" absolute flex justify-between bgred-300 font-headerFont  child:-skew-x-6 ring-1 ring-slate-400 backdrop-blur-md rounded-xl  imd:w-[12.4rem] imd:p-3 imd:bottom-[14rem]  imd:-left-16 lg:w-[13rem] lg:p-3 lg:bottom-[18rem]  lg:-left-16 llg:w-[14rem] llg:p-3 llg:bottom-[18rem]  llg:-left-16 xl:w-[15rem] xl:p-3 xl:bottom-[20rem]  xl:-left-16 2xl:w-[17rem] 2xl:p-4 2xl:bottom-[22rem]  2xl:-left-20"
                >
                  <img
                    key={item.i + 9}
                    src={item.imgOwner}
                    className={
                      item.id == 1 || item.id == 2
                        ? "imd:w-14 imd:h-14 lg:w-16 lg:h-16 object-contain"
                        : "imd:w-14 imd:h-14 lg:w-16 lg:h-16 object-contain -skew-x-6"
                    }
                    alt={item.imgNameAlt}
                  />
                  <div key={index + 10} className=" pt-2">
                    <h2
                      className="lg:text-base llg:text-lg xl:text-xl 2xl:text-2xl font-semibold"
                      key={item.id + 11}
                    >
                      {item.imgName}
                    </h2>
                    <p className="text-black" key={item.id + 12}>
                      {item.imgSmName}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className=" z-20 ring-1 ring-slate-400 backdrop-blur-2xl -skew-x-[8deg] absolute w-fit h-16  font-headerFont rounded-xl imd:p-2 imd:-left-[2.7rem]  imd:pb-4 imd:pr-4 imd:text-sm imd:top-[23rem] lg:p-3 lg:pb-6 lg:pr-7 lg:left-[7.8rem] lg:top-[28rem] llg:left-[16rem] llg:top-[27.6rem] xl:top-[29.2rem] xl:p-4 xl:pb-14 xl:pr-5 xl:left-[7.5rem] xl:text-base 2xl:left-[8rem]">
        <h3> Auction</h3>

        <br />
        <span className=" text-xs relative bottom-4">End In</span>
      </div>
      <div className=" z-30 relative w-full h-full ">
        <img
          src={Vec1}
          alt="liner gradient color"
          className=" z-40 absolute pointer-events-none  imd:-left-64 imd:-bottom-[30rem] lg:-left-40 lg:-bottom-[45rem] llg:-left-24 xl:-left-44  2xl:-left-52 2xl:-bottom-[42rem]"
        />
        <img
          src={Vec2}
          alt="liner gradient color"
          className=" bg-right absolute -bottom-[48rem] -right-20 pointer-events-none imd:left-24 imd:-bottom-[38rem] lg:-bottom-[46rem] lg:left-44 llg:left-72 xl:-bottom-[52rem]"
        />
        <div className=" absolute font-headerFont backdrop-blur-lg outline-slate-500 outline outline-1  flex flex-nowrap items-center rounded-xl -skew-x-[8deg] imd:top-[23.8rem] imd:left-[3rem] lg:top-[29.5rem] imd:p-2 lg:left-[15rem] llg:top-[28.7rem] llg:p-3 llg:left-[22.5rem] xl:p-3 xl:top-[31rem] xl:left-[14rem]  2xl:left-[15.3rem] 2xl:p-5                           ">
          <h2 className=" inline-block text-center imd:px-2 xl:px-4 ">
            <span className="imd:text-2xl xl:text-3xl 2xl:text-4xl imd:font-semibold">
              {hours}
            </span>
            <br />
            Hours
          </h2>
          <span className="  imd:text-2xl xl:text-4xl xl:px-1 2xl:px-3">:</span>

          <h2 className=" inline-block text-center imd:px-2  xl:px-4">
            <span className="imd:text-2xl xl:text-3xl 2xl:text-4xl imd:font-semibold">
              {min}
            </span>
            <br />
            Minutes
          </h2>
          <span className=" imd:text-2xl xl:text-3xl 2xl:text-4xl xl:px-1 2xl:px-3">
            :
          </span>
          <h2 className=" inline-block text-center imd:px-2 xl:px-4">
            <span className="imd:text-2xl xl:text-3xl 2xl:text-4xl imd:font-semibold">
              {sec}
            </span>
            <br />
            Seconds
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Nbody2;

import { useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import Nbody2 from "./Nbody2";
import FtextSha from "./../../../../assets/Icons/H1TextColor.webp";
import { theMainCon } from "../../LandingP";

function Number({ n, str }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div className=" inline-block w-fi">
      <div className="  flex justify-center items-center text-center extsm:mx-6 exsm:mx-4 mx-6 text-md baseM:text-lg exsm:text-3xl ">
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
        K+
      </div>
      <div className=" flex justify-center">
        <p className=" text-lg font-normal text-slate-200">{str}</p>
      </div>
    </div>
  );
}

const Nbody = () => {
  const myCon = useContext(theMainCon);

  return (
    <section className="baseM:mt-36 lg:mt-44 mt-44 sm:mt-48 max-w-[180rem] esm:mt-44 exsm:mt-36  extsm:mt-44 w-[89.6%] text-white imd:flex imd:justify-between imd:items-middle xl:px-3 2xl:px-16 xl:w-[75rem] 2xl:w-11/12">
      <button
        ref={myCon.homePage}
        className="absolute top-0"
        aria-label="ref"
      ></button>
      <section className="relative my-6 text-center flex flex-col  items-center imd:text-left imd:items-start">
        <img
          src={FtextSha}
          alt="A linear gradient color"
          className=" absolute left-24 border-white "
        />
        <h1
          className=" relative bg-left phone:text-4xl esm:text-6xl eexx:text-5xl  font-headerFont phone:font-semibold
                      mb-7 imd:text-[3rem] lg:text-[4rem] lg:text-left  xl:text-[4.8rem] 2xl:text-[5.5rem]  "
        >
          Discover
          <br />
          Collect, & Sell
          <br />
          <span className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
            {" "}
            Extraordinary{" "}
          </span>
          <br />
          NFTs
        </h1>
        <p
          className=" font-poppi extsm:text-base text-slate-200 extsm:w-80 exsm:w-96 relative bottom-7 
          sm:mt-5 phone:text-xs phone:px-2 extsm:px-1 "
        >
          The leading NFT Marketplace on Ethereum Home to the next generation of
          digital creators. Discover the best NFT collections.
        </p>
        <div
          className=" child:mx-3 imd:child:p-1  imd:child:py-1 imd:child:font-semibold child:cursor-pointer w-screen relative flex justify-evenly
                         imd:w-3/4 imd:justify-start imd:ml-1 imd:gap-4 imd:child:mx-0 child:transition-all"
        >
          <button
            className=" bg-backColor p-1 h-fit w-28 focus:bg-sky-600 rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#141843] hover:ring-sky-300
                          imd:ml-4 xl:p-3 xl:px-3"
          >
            Explore
          </button>
          <button className=" hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 hover:ring-offset-[#141843] border w-28 rounded-full">
            Bid now
          </button>
        </div>
        <div className=" font-headerFont w-full  mt-8 font-semibold mb-10">
          <Number n={432} str={"collections"} />
          <Number n={200} str={"Artists"} />
          <Number n={10} str={"Community"} />
        </div>
      </section>
      <section className="  w-72 md:80 lg:w-[40rem] llg:w-[45rem] lg:mr-0 hidden imd:block">
        <Nbody2 />
      </section>
    </section>
  );
};

export default Nbody;

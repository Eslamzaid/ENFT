import React from "react";
import FtextSha from "./../../assets/Icons/H1TextColor.png";
import { useSpring, animated } from "@react-spring/web";

function Number({ n, str }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div className=" inline-block h-min mt-10 ">
      <div className=" flex text-center mx-4">
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
        K+
      </div>
      <p className=" text-xs font-normal text-slate-200">{str}</p>
    </div>
  );
}

const Nbody = () => {
  return (
    <section className=" prose-xl mt-12 text-white md:flex md:justify-center  w-11/12  md:items-middle">
      <section className="relative py-10 text-center flex flex-col items-center">
        <img src={FtextSha} className=" absolute -right-28 top-10" />
        <h1 className=" relative text-[2.6rem] font-headerFont font-semibold ">
          Discover
          <br />
          Collect, & Sell
          <br />
          <span className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
            {" "}
            Extraordinary
          </span>
          NFTs
        </h1>
        <p className=" font-poppi text-sm mb-8  text-prose-sm text-slate-400">
          The leading NFT Marketplace on EthereumHome to the next generation of
          digital creators.Discover the best NFT collections.
        </p>
        <div className=" child:cursor-pointer gap-x-2 relative flex justify-between w-8/12 ">
          <button className=" bg-backColor p-1 h-fit w-28 rounded-xl hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#141843] hover:ring-sky-300">
            Explore
          </button>
          <button className=" hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 hover:ring-offset-[#141843] border w-28 rounded-xl">
            Bid now
          </button>
        </div>
        <div className=" font-headerFont w-full font-semibold">
          <Number n={432} str={"collections"} />
          <Number n={200} str={"Artists"} />
          <Number n={10} str={"Community"} />
        </div>
      </section>
    </section>
  );
};

export default Nbody;

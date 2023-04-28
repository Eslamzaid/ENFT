// import { useSpring, animated } from "@react-spring/web";
// import Nbody2 from "./Nbody2";
// import FtextSha from "./../../../../assets/Icons/H1TextColor.webp";

// function Number({ n, str }) {
//   const { number } = useSpring({
//     from: { number: 0 },
//     number: n,
//     delay: 200,
//     config: { mass: 1, tension: 20, friction: 10 },
//   });

//   return (
//     <div className=" inline-block w-fi">
//       <div className="  flex justify-center items-center text-center mx-4">
//         <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
//         K+
//       </div>
//       <div className=" flex justify-center">
//         <p className=" text-sm font-normal text-slate-200">{str}</p>
//       </div>
//     </div>
//   );
// }

// const Nbody = () => {
//   return (
//     <section
//       className="lg:mt-14 mt-12 w-[89.6%] text-white 
//                  md:flex md:justify-between  md:items-middle
//                  xl:px-3 2xl:px-16 xl:w-[75rem] 2xl:w-11/12"
//     >
//       <section
//         className="relative my-6 text-center flex flex-col items-center
//                           md:text-left md:items-start
//                           "
//       >
//         <img
//           src={FtextSha}
//           alt="A linear gradient color"
//           className=" absolute w-10 border-2 border-white "
//         />
//         <h1
//           className=" relative bg-left exsm:text-6xl extsm:text-5xl text-[2.6rem] font-headerFont font-semibold
//                       mb-7 
//                       md:text-[3rem]
//                       lg:text-[4rem] lg:text-left 
//                       xl:text-[4.8rem]
//                       2xl:text-[5.5rem] "
//         >
//           Discover
//           <br />
//           Collect, & Sell
//           <br />
//           <span className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
//             {" "}
//             Extraordinary{" "}
//           </span>
//           <br />
//           NFTs
//         </h1>
//         <p
//           className=" font-poppi extsm:text-base  text-slate-200 extsm:w-96 relative bottom-7 
//           sm:mt-5 text-xs w-80 extsm:px-1"
//         >
//           The leading NFT Marketplace on Ethereum Home to the next generation of
//           digital creators. Discover the best NFT collections.
//         </p>
//         <div
//           className=" child:mx-3 md:child:p-1  md:child:py-1 md:child:font-semibold child:cursor-pointer w-screen relative flex justify-evenly
//                          md:w-3/4 md:justify-start md:ml-1 md:gap-4 md:child:mx-0"
//         >
//           <button
//             className=" bg-backColor p-1 h-fit w-28 focus:bg-sky-600 rounded-xl hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#141843] hover:ring-sky-300
//                           md:rounded-full md:ml-4 xl:p-3 xl:px-3"
//           >
//             Explore
//           </button>
//           <button className=" hover:ring-2 hover:ring-offset-2hover:ring-slate-400 hover:ring-offset-[#141843] border w-28 rounded-xl md:rounded-full">
//             Bid now
//           </button>
//         </div>
//         <div className=" font-headerFont w-full mt-8 sm:text-3xl font-semibold">
//           <Number n={432} str={"collections"} />
//           <Number n={200} str={"Artists"} />
//           <Number n={10} str={"Community"} />
//         </div>
//       </section>
//       <section className=" md:w-[20rem] lg:w-[45rem] lg:mr-0 hidden md:block">
//         <Nbody2 />
//       </section>
//     </section>
//   );
// };

// export default Nbody;

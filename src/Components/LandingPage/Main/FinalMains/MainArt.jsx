import { useContext } from 'react'
import Art1 from "./../../../../assets/images/Images/Articel1.webp";
import Art2 from "./../../../../assets/images/Images/Article2.webp";
import Art3 from "./../../../../assets/images/Images/Artilce3.webp";
import { theMainCon } from '../../LandingP'

const MainArt = () => {
  const myCon = useContext(theMainCon)
  return (
    <section className=" rounded-3xl 11/12 msm:w-10/12 text-white mt-72 h-full relative ">
      <button ref={myCon.seven} aria-label="ref"></button>
      <div className=" relative flex flex-col items-center">
        <h2 className="bg-gradient-to-r  pt-20 z-20 mb-20 relative from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block font-headerFont font-semibold text-transparent bg-clip-text text-sm extsm:text-xl exsm:text-2xl sm:text-3xl md:text-5xl  llgg:text-6xl">
          Articles
        </h2>
        <aside className=" pb-10 z-20  flex flex-wrap font-poppi justify-center gap-y-16 sty:justify-around w-11/12 child:flex child:flex-col child:items-center child:justify-baseline overflow-hidden">
          <div className=" bg-gradient-to-tr  w-full esm:w-[28rem] from-[#2E3258] h-fit rounded-xl z-40 flex-none">
            <img className=" object-cover " src={Art1} alt="Article 1" />
            <h3 className=" text:lg esm:text-xl px-5 py-5">
              We've lowered marketplace fees on all your favorite NFTs
            </h3>
            <p className=" text-left text-[#BDBECA] px-5 mb-5">
              January 23, 2022
            </p>
          </div>
          <div className=" bg-gradient-to-tr w-full esm:w-[28rem] from-[#2E3258] h-fit rounded-xl z-40 flex-none ">
            <img className=" object-cover " src={Art2} alt="Article 2" />
            <h3 className=" text:lg esm:text-xl px-5 py-5">
              Your Ultimate Guide to Getting Started With NFTs on Rarible
            </h3>
            <p className=" text-left text-[#BDBECA] px-5 mb-5">
              April 03, 2022
            </p>
          </div>
          <div className=" bg-gradient-to-tr w-full esm:w-[28rem] from-[#2E3258] h-fit rounded-xl z-40 remo:flex-none">
            <img className=" object-cover" src={Art3} alt="Article 3" />
            <h3 className=" text:lg esm:text-xl px-5 py-5">
              Why Community Marketplaces are the future of NFT trading
            </h3>
            <p className=" text-left text-[#BDBECA] px-5 mb-5">July 7, 2022</p>
          </div>
        </aside>
      </div>
      <div className="text-center w-full mt-6  mx-auto">
        <button
          type="button"
          className="font-poppi font-semibold transition-all ease-in-out max-w-[10rem] w-8/12 bg-transparent p-3 rounded-full sms:w-9/12 lg:w-11/12 mt- lg:h-14 focus:text-slate-300 border hover:ring ring-offset-[#141845] focus:ring-slate-200 ring-offset-4 mb-2"
        >
          See more
        </button>
      </div>
    </section>
  );
};

export default MainArt;

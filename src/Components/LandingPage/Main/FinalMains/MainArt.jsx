import Art1 from "./../../../../assets/images/Images/Articel1.webp";
import Art2 from "./../../../../assets/images/Images/Article2.webp";
import Art3 from "./../../../../assets/images/Images/Artilce3.webp";

const MainArt = () => {
  return (
    <section className=" rounded-3xl 11/12 msm:w-10/12 text-white mt-72 h-full">
      <div className=" relative flex flex-col items-center">
        <h2 className="bg-gradient-to-r  pt-20 z-20 mb-20 relative from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block font-headerFont font-semibold text-transparent bg-clip-text text-sm extsm:text-xl exsm:text-2xl sm:text-3xl md:text-5xl  llgg:text-6xl">
          Articles
        </h2>
        <aside class=" flex gap-x-10">
          <div className=" bg-gradient-to-tr w-[28rem] from-[#2E3258] h-fit rounded-xl z-40 ">            
            <img className=" object-cover " src={Art1} alt="Article 1" />
            <h3 className=" text-xl px-5 py-5">We've lowered marketplace fees on all your favorite NFTs</h3>
            <p className=" text-sm text-[#BDBECA] px-5 mb-5">January 23, 2022</p>
          </div>
          <div className=" bg-gradient-to-tr w-[28rem] from-[#2E3258] h-fit rounded-xl z-40 ">            
            <img className=" object-cover " src={Art2} alt="Article 2" />
            <h3 className=" text-xl px-5 py-5">Your Ultimate Guide to Getting Started With NFTs on Rarible</h3>
            <p className=" text-sm text-[#BDBECA] px-5 mb-5">April 03, 2022</p>
          </div>
          <div className=" bg-gradient-to-tr w-[28rem] from-[#2E3258] h-fit rounded-xl z-40 ">            
            <img className=" object-cover" src={Art3} alt="Article 3" />
            <h3 className=" text-xl px-5 py-5">Why Community Marketplaces are the future of NFT trading</h3>
            <p className=" text-sm text-[#BDBECA] px-5 mb-5">July 7, 2022</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MainArt;

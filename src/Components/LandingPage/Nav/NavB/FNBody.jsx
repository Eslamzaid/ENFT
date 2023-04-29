import FImg from "./../../../../assets/images/Images/metaM.webp";
import SecImg from "./../../../../assets/images/Images/exo.webp";
import ThiImg from "./../../../../assets/images/Images/safeP.webp";
import FoImg from "./../../../../assets/images/Images/trust.webp";
import FIimg from "./../../../../assets/images/Images/wallet.webp";

const FNBody = () => {
  return (
    <section className=" bg-cover bg- flex justify-center mt-8 w-screen xl:px-3 2xl:px-16 xl:w-[75rem] 2xl:w-11/12 my-32 exsm:my-48 lg:my-0 msm:mb-72 lg:mb-96 z-50 relative ">
      <div
        className=" xl:w-[80rem] relative top-5 sm:top-48 child:pointer-events-none
                    w-11/12
                    lg:w-[65rem] llg:w-[70rem] z-30"
      >
        <div
          className=" flex-col flex items-start pl-4 pr-2 child:py-3 esm:items-center  esm:flex-row justify-between child:object-contain child:w-32 sm:child:w-52 sm:child:px-3  
                         msm:child:px-5 msm:child:w-48 md:child:px-5 lg:px-10 llg:px-4 relative bottom-5 md:child:w-60 lg:child:w-fit"
        >
          <img src={FImg} alt="MetaMask" />
          <img src={FoImg} className=" self-end" alt="Trust Wallet" />
          <img src={FIimg} alt="WalletConnects" />
        </div>
        <div
          className=" flex-col flex items-start px-4 child:py-3 esm:child:px-5 esm:child:w-44 w-full  esm:justify-center esm:items-center esm:flex-row justify-evenly child:w-28 sm:child:mx-10 sm:child:w-52 msm:child:px-5 
                         msm:child:w-48 md:child:w-52 md:child:mx-10 lg:child:w-fit lg:child:px-12 llg:child:mx-0 xl:child:px-24"
        >
          <img src={SecImg} className=" self-end esm:self-auto" alt="Exodus" />
          <img src={ThiImg} alt="SafePal" />
        </div>
      </div>
    </section>
  );
};

export default FNBody;

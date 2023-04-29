import FPol from "./../../../../assets/images/Images/FPol.webp";
import FImg from "./../../../../assets/images/Images/metaM.webp";
import SecImg from "./../../../../assets/images/Images/exo.webp";
import ThiImg from "./../../../../assets/images/Images/safeP.webp";
import FoImg from "./../../../../assets/images/Images/trust.webp";
import FIimg from "./../../../../assets/images/Images/wallet.webp";

const FNBody = () => {
  return (
    <section className=" flex justify-center mt-8 w-screen xl:px-3 2xl:px-16 xl:w-[75rem] 2xl:w-11/12">
      <img
        src={FPol}
        alt=" Some Shades for design"
        className="  absolute w-screen "
      />
      <div
        className=" xl:w-[80rem] relative top-48 child:pointer-events-none
                    w-11/12
                    llg:bg-red-400 lg:w-[65rem] llg:w-[70rem] "
      >
        <div className=" flex  justify-between child:object-contain sm:child:w-52 sm:child:px-3 msm:child:px-5 msm:child:w-48 md:child:px-5 lg:px-10 llg:px-4 relative bottom-5 md:child:w-60 lg:child:w-fit">
          <img src={FImg} alt="MetaMask" />
          <img src={FoImg} alt="Trust Wallet" />
          <img src={FIimg} alt="WalletConnects" />
        </div>
        <div className=" flex justify-evenly mt-7 sm:child:px-5 sm:child:w-52 msm:child:px-5 msm:child:w-48 md:child:w-52 md:child:px-5 lg:child:w-fit msm:bg-green-900 sm:bg-red-400 ">
          <img src={SecImg} alt="Exodus" />
          <img src={ThiImg} alt="SafePal" />
        </div>
      </div>
    </section>
  );
};

export default FNBody;

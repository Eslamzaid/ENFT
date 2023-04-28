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
        className=" absolute w-screen h-[100rem]"
      />
      <div className=" w-[80rem] relative top-44  child:poiner-events-none">
        <div className=" flex justify-between child:object-contain px-4 relative bottom-5">
          <img src={FImg} alt="MetaMask" />
          <img src={FoImg} alt="Trust Wallet" />
          <img src={FIimg} alt="WalletConnects" />
        </div>
        <div className=" flex justify-evenly mt-7">
          <img src={SecImg} alt="Exodus" />
          <img src={ThiImg} alt="SafePal" />
        </div>
      </div>
    </section>
  );
};

export default FNBody;

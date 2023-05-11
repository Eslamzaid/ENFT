import BookMark from "./../../../../assets/Icons/Bookmark.webp";
import Comb from "./../../../../assets/Icons/Combined-Shape.webp";
import wallet from "./../../../../assets/Icons/Wallet.webp";

const MainP3 = () => {
  return (
    <section className=" rounded-2xl 11/12 msm:w-10/12 text-white mt-72 h-full">
      <div className=" relative flex flex-col items-center">
        <div className=" border-slate-700 border rounded-2xl  shadow-2xl absolute h-full z-10 w-10/12"></div>
        <h2 className="bg-gradient-to-r  pt-20 z-20 mb-20 relative from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block font-headerFont font-semibold text-transparent bg-clip-text text-sm extsm:text-xl exsm:text-2xl sm:text-2xl imd:text-5xl  llgg:text-6xl">
          Create and Sell Your NFTs
        </h2>
        <aside className=" pb-10 z-20  flex flex-wrap font-poppi justify-center gap-y-16 sty:justify-between w-9/12 child:flex child:flex-col child:items-center child:justify-baseline child:mx-4">
          <div className="exsm:[&>p]:w-72 [&>p]:w-56 exsm:[&>h3]:text-xl [&>h3]:text-imd [&>h3]:font-semibold [&>h3]:my-5 text-center flex-none">
            <img className=" w-12 my-2 " src={BookMark} alt="your wallet" />
            <h3>Set up your wallet</h3>
            <p className="text-xs exsm:text-base">
              Once you've set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              wallets we support.
            </p>
          </div>
          <div className="exsm:[&>p]:w-72 [&>p]:w-56 exsm:[&>h3]:text-xl [&>h3]:text-imd [&>h3]:font-semibold [&>h3]:my-5 text-center flex-none">
            <img className=" w-12 my-2" src={Comb} alt="Create Collection" />
            <h3>Upload & Create Collection</h3>
            <p className="text-xs exsm:text-base">
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee.
            </p>
          </div>
          <div className="exsm:[&>p]:w-72 [&>p]:w-56 exsm:[&>h3]:text-xl [&>h3]:text-imd [&>h3]:font-semibold [&>h3]:my-5 text-center sty:flex-grow remo:flex-none">
            <img className=" w-16 my-2" src={wallet} alt="sale" />
            <h3>List them for sale</h3>
            <p className="text-xs exsm:text-base">
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs, and we help
              you sell them
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MainP3;
